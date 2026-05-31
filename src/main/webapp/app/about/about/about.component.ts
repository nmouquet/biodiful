import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateDirective } from 'app/shared/language';
import { SURVEYS, Survey } from './surveys.data';

@Component({
  selector: 'jhi-about',
  templateUrl: './about.component.html',
  styleUrl: './about.scss',
  standalone: true,
  imports: [CommonModule, TranslateDirective, RouterModule],
})
export default class AboutComponent {
  private translateService = inject(TranslateService);
  surveys = SURVEYS;

  currentLang(): 'fr' | 'en' | 'es' {
    const lang = this.translateService.currentLang;
    return lang === 'fr' || lang === 'es' ? lang : 'en';
  }
}
