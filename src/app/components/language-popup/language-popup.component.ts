import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../i18n/translations';

interface LangOption {
  code: Language;
  flag: string;
  name: string;
  country: string;
  prompt: string;
}

@Component({
  selector: 'app-language-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-popup.component.html',
  styleUrl: './language-popup.component.scss',
})
export class LanguagePopupComponent {
  private readonly langService = inject(LanguageService);

  readonly selected = output<void>();

  readonly options: LangOption[] = [
    { code: 'en', flag: '🇬🇧', name: 'English',    country: 'United Kingdom', prompt: 'en_US.UTF-8' },
    { code: 'pt', flag: '🇧🇷', name: 'Português',  country: 'Brasil',         prompt: 'pt_BR.UTF-8' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский',    country: 'Россия',         prompt: 'ru_RU.UTF-8' },
  ];

  select(lang: Language): void {
    this.langService.setLanguage(lang);
    this.selected.emit();
  }

  onKeydown(event: KeyboardEvent, lang: Language): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.select(lang);
    }
  }
}
