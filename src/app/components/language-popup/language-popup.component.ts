import { Component, inject, output, signal } from '@angular/core';
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

interface PopupText {
  question: string;
  confirm: string;
  change: string;
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

  readonly currentLang = this.langService.lang;
  readonly isOpen = signal(false);

  readonly options: LangOption[] = [
    { code: 'en', flag: '🇬🇧', name: 'English',    country: 'United Kingdom', prompt: 'en_US.UTF-8' },
    { code: 'pt', flag: '🇧🇷', name: 'Português',  country: 'Brasil',         prompt: 'pt_BR.UTF-8' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский',    country: 'Россия',         prompt: 'ru_RU.UTF-8' },
  ];

  private readonly texts: Record<Language, PopupText> = {
    en: { question: 'Is this your language?', confirm: 'Continue', change: 'Choose another language' },
    pt: { question: 'Este é o seu idioma?',    confirm: 'Continuar', change: 'Escolher outro idioma' },
    ru: { question: 'Это ваш язык?',           confirm: 'Продолжить', change: 'Выбрать другой язык' },
  };

  get current(): LangOption {
    return this.options.find(o => o.code === this.currentLang()) ?? this.options[0];
  }

  get text(): PopupText {
    return this.texts[this.currentLang()];
  }

  toggleOpen(): void {
    this.isOpen.update(v => !v);
  }

  preview(lang: Language): void {
    this.langService.previewLanguage(lang);
    this.isOpen.set(false);
  }

  confirm(): void {
    this.langService.confirmLanguage();
    this.selected.emit();
  }

  onKeydown(event: KeyboardEvent, action: () => void): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }
}
