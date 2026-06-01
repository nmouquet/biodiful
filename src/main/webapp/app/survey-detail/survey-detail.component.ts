import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateDirective } from 'app/shared/language';
import { SURVEYS, Survey } from '../about/about/surveys.data';
import { PARTNERS, Partner } from '../about/about/partners.data';
import { PUBLICATIONS, Publication } from '../about/about/publications.data';

@Component({
  selector: 'jhi-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrl: './survey-detail.scss',
  standalone: true,
  imports: [CommonModule, TranslateDirective, RouterModule],
})
export default class SurveyDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private translateService = inject(TranslateService);

  survey: Survey | undefined;
  partners: Partner[] = [];
  publications: Publication[] = [];

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.survey = SURVEYS.find(s => s.slug === slug);

    if (this.survey) {
      this.partners = PARTNERS.filter(p => this.survey!.partners.includes(p.code));
      this.publications = PUBLICATIONS.filter(p => this.survey!.publications.includes(p.slug));
    }
  }

  currentLang(): 'fr' | 'en' | 'es' {
    const lang = this.translateService.currentLang;
    return lang === 'fr' || lang === 'es' ? lang : 'en';
  }

  imagePath(): string {
    return this.survey?.image ? `/content/images/surveys/${this.survey.image}` : '';
  }
}
