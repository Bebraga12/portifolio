import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../i18n/translations';

interface LangOption {
  code: Language;
  flag: string;
  name: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  private readonly langService = inject(LanguageService);

  readonly currentLang = this.langService.lang;
  readonly isOpen = signal(false);

  readonly options: LangOption[] = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'pt', flag: '🇧🇷', name: 'Português' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  ];

  get current(): LangOption {
    return this.options.find(o => o.code === this.currentLang()) ?? this.options[0];
  }

  toggleOpen(): void {
    this.isOpen.update(v => !v);
  }

  select(lang: Language): void {
    this.langService.setLanguage(lang);
    this.isOpen.set(false);
  }

  onKeydown(event: KeyboardEvent, lang: Language): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.select(lang);
    }
  }
}
