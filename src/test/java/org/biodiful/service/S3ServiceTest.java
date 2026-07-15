package org.biodiful.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import software.amazon.awssdk.awscore.exception.AwsErrorDetails;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.ListObjectsV2Request;
import software.amazon.awssdk.services.s3.model.ListObjectsV2Response;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.services.s3.model.S3Object;
import software.amazon.awssdk.services.s3.paginators.ListObjectsV2Iterable;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedGetObjectRequest;

@ExtendWith(MockitoExtension.class)
class S3ServiceTest {

    @Mock
    private S3Client s3Client;

    @Mock
    private S3Presigner s3Presigner;

    private S3Service s3Service;

    @BeforeEach
    void setUp() throws Exception {
        s3Service = new S3Service(s3Client, s3Presigner);

        // The service uses listObjectsV2Paginator, which returns a ListObjectsV2Iterable.
        // We return a real iterable backed by the mock client, so the paginator drives the
        // (mocked) listObjectsV2 calls and the actual continuation-token logic is exercised.
        lenient()
            .when(s3Client.listObjectsV2Paginator(any(ListObjectsV2Request.class)))
            .thenAnswer(invocation -> new ListObjectsV2Iterable(s3Client, invocation.getArgument(0)));

        // Setup default presigner behavior to return presigned URLs (lenient for tests that don't need it)
        lenient()
            .when(s3Presigner.presignGetObject(any(GetObjectPresignRequest.class)))
            .thenAnswer(invocation -> {
                GetObjectPresignRequest request = invocation.getArgument(0);
                GetObjectRequest getObjectRequest = request.getObjectRequest();
                String presignedUrl = String.format(
                    "https://%s.s3.test.com/%s?X-Amz-Signature=test",
                    getObjectRequest.bucket(),
                    getObjectRequest.key()
                );
                // Create mock PresignedGetObjectRequest
                PresignedGetObjectRequest presigned = mock(PresignedGetObjectRequest.class);
                when(presigned.url()).thenReturn(new URL(presignedUrl));
                return presigned;
            });
    }

    @Test
    void shouldListImagesFromS3Folder() {
        // Given
        String folderUrl = "https://test-bucket.s3.fr-par.scw.cloud/test-folder/";

        S3Object imageObject1 = S3Object.builder().key("test-folder/image1.jpg").size(1024L).build();
        S3Object imageObject2 = S3Object.builder().key("test-folder/image2.png").size(2048L).build();
        S3Object textFile = S3Object.builder().key("test-folder/readme.txt").size(512L).build();

        ListObjectsV2Response response = ListObjectsV2Response.builder()
            .contents(Arrays.asList(imageObject1, imageObject2, textFile))
            .build();

        when(s3Client.listObjectsV2(any(ListObjectsV2Request.class))).thenReturn(response);

        // When
        List<String> imageUrls = s3Service.listMediaFiles(folderUrl);

        // Then
        assertThat(imageUrls).hasSize(2);
        // URLs should be presigned (contain signature parameter)
        assertThat(imageUrls.get(0)).contains("test-bucket").contains("test-folder/image1.jpg").contains("X-Amz-Signature");
        assertThat(imageUrls.get(1)).contains("test-bucket").contains("test-folder/image2.png").contains("X-Amz-Signature");
    }

    @Test
    void shouldFilterOnlyImageFiles() {
        // Given
        String folderUrl = "https://test-bucket.s3.fr-par.scw.cloud/images/";

        S3Object jpg = S3Object.builder().key("images/photo.jpg").build();
        S3Object jpeg = S3Object.builder().key("images/photo.jpeg").build();
        S3Object png = S3Object.builder().key("images/photo.png").build();
        S3Object gif = S3Object.builder().key("images/photo.gif").build();
        S3Object webp = S3Object.builder().key("images/photo.webp").build();
        S3Object pdf = S3Object.builder().key("images/document.pdf").build();
        S3Object txt = S3Object.builder().key("images/notes.txt").build();

        ListObjectsV2Response response = ListObjectsV2Response.builder()
            .contents(Arrays.asList(jpg, jpeg, png, gif, webp, pdf, txt))
            .build();

        when(s3Client.listObjectsV2(any(ListObjectsV2Request.class))).thenReturn(response);

        // When
        List<String> imageUrls = s3Service.listMediaFiles(folderUrl);

        // Then
        assertThat(imageUrls).hasSize(5);
    }

    @Test
    void shouldReturnEmptyListWhenNoImagesFound() {
        // Given
        String folderUrl = "https://test-bucket.s3.fr-par.scw.cloud/empty-folder/";

        ListObjectsV2Response response = ListObjectsV2Response.builder().contents(Arrays.asList()).build();

        when(s3Client.listObjectsV2(any(ListObjectsV2Request.class))).thenReturn(response);

        // When
        List<String> imageUrls = s3Service.listMediaFiles(folderUrl);

        // Then
        assertThat(imageUrls).isEmpty();
    }

    @Test
    void shouldRetrieveAllFilesAcrossMultiplePages() {
        // Given a folder with more than 1000 files, S3 returns them across several
        // truncated pages. The paginator must follow the continuation token(s) so that
        // every file is retrieved, not just the first page of 1000.
        String folderUrl = "https://test-bucket.s3.fr-par.scw.cloud/big-folder/";

        // Page 1: 1000 objects, truncated with a continuation token pointing to page 2
        List<S3Object> page1Objects = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            page1Objects.add(S3Object.builder().key("big-folder/image" + i + ".jpg").build());
        }
        ListObjectsV2Response page1 = ListObjectsV2Response.builder()
            .contents(page1Objects)
            .isTruncated(true)
            .nextContinuationToken("token-page-2")
            .build();

        // Page 2: remaining 500 objects, not truncated (last page)
        List<S3Object> page2Objects = new ArrayList<>();
        for (int i = 1000; i < 1500; i++) {
            page2Objects.add(S3Object.builder().key("big-folder/image" + i + ".jpg").build());
        }
        ListObjectsV2Response page2 = ListObjectsV2Response.builder().contents(page2Objects).isTruncated(false).build();

        // Return page 1 for the initial request (no token), page 2 once the token is supplied
        when(s3Client.listObjectsV2(any(ListObjectsV2Request.class))).thenAnswer(invocation -> {
            ListObjectsV2Request request = invocation.getArgument(0);
            return request.continuationToken() == null ? page1 : page2;
        });

        // When
        List<String> mediaUrls = s3Service.listMediaFiles(folderUrl);

        // Then all 1500 files are retrieved, not just the first 1000
        assertThat(mediaUrls).hasSize(1500);
    }

    @Test
    void shouldThrowExceptionForInvalidUrl() {
        // Given
        String invalidUrl = "not-a-valid-url";

        // When/Then
        assertThatThrownBy(() -> s3Service.listMediaFiles(invalidUrl)).isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    void shouldThrowExceptionForNonS3Url() {
        // Given
        String nonS3Url = "https://example.com/folder/";

        // When/Then
        assertThatThrownBy(() -> s3Service.listMediaFiles(nonS3Url)).isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    void shouldHandleS3Exception() {
        // Given
        String folderUrl = "https://test-bucket.s3.fr-par.scw.cloud/test-folder/";

        AwsErrorDetails errorDetails = AwsErrorDetails.builder().errorCode("AccessDenied").errorMessage("Access Denied").build();

        when(s3Client.listObjectsV2(any(ListObjectsV2Request.class))).thenThrow(
            S3Exception.builder().message("Access Denied").awsErrorDetails(errorDetails).statusCode(403).build()
        );

        // When/Then
        assertThatThrownBy(() -> s3Service.listMediaFiles(folderUrl))
            .isInstanceOf(RuntimeException.class)
            .hasMessageContaining("Failed to list media files from S3");
    }

    @Test
    void shouldParseUrlWithoutExplicitRegion() {
        // Given
        String folderUrl = "https://test-bucket.s3.scw.cloud/folder/";

        S3Object imageObject = S3Object.builder().key("folder/image.jpg").build();

        ListObjectsV2Response response = ListObjectsV2Response.builder().contents(Arrays.asList(imageObject)).build();

        when(s3Client.listObjectsV2(any(ListObjectsV2Request.class))).thenReturn(response);

        // When
        List<String> imageUrls = s3Service.listMediaFiles(folderUrl);

        // Then
        assertThat(imageUrls).hasSize(1);
        assertThat(imageUrls.get(0)).contains("test-bucket").contains("folder/image.jpg").contains("X-Amz-Signature");
    }

    @Test
    void shouldSupportAWSProvider() {
        // Given
        String folderUrl = "https://my-bucket.s3.eu-west-1.amazonaws.com/photos/";

        S3Object imageObject = S3Object.builder().key("photos/vacation.jpg").build();

        ListObjectsV2Response response = ListObjectsV2Response.builder().contents(Arrays.asList(imageObject)).build();

        when(s3Client.listObjectsV2(any(ListObjectsV2Request.class))).thenReturn(response);

        // When
        List<String> imageUrls = s3Service.listMediaFiles(folderUrl);

        // Then
        assertThat(imageUrls).hasSize(1);
        assertThat(imageUrls.get(0)).contains("my-bucket").contains("photos/vacation.jpg").contains("X-Amz-Signature");
    }

    @Test
    void shouldSupportScalewayProvider() {
        // Given
        String folderUrl = "https://my-bucket.s3.fr-par.scw.cloud/images/";

        S3Object imageObject = S3Object.builder().key("images/photo.png").build();

        ListObjectsV2Response response = ListObjectsV2Response.builder().contents(Arrays.asList(imageObject)).build();

        when(s3Client.listObjectsV2(any(ListObjectsV2Request.class))).thenReturn(response);

        // When
        List<String> imageUrls = s3Service.listMediaFiles(folderUrl);

        // Then
        assertThat(imageUrls).hasSize(1);
        assertThat(imageUrls.get(0)).contains("my-bucket").contains("images/photo.png").contains("X-Amz-Signature");
    }

    @Test
    void shouldSupportDigitalOceanSpacesProvider() {
        // Given
        String folderUrl = "https://my-space.s3.nyc3.digitaloceanspaces.com/uploads/";

        S3Object imageObject = S3Object.builder().key("uploads/image.jpg").build();

        ListObjectsV2Response response = ListObjectsV2Response.builder().contents(Arrays.asList(imageObject)).build();

        when(s3Client.listObjectsV2(any(ListObjectsV2Request.class))).thenReturn(response);

        // When
        List<String> imageUrls = s3Service.listMediaFiles(folderUrl);

        // Then
        assertThat(imageUrls).hasSize(1);
        assertThat(imageUrls.get(0)).contains("my-space").contains("uploads/image.jpg").contains("X-Amz-Signature");
    }
}
