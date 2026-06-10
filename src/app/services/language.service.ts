import { Injectable, signal, computed } from '@angular/core';
import { Language, Translation, translations } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _lang = signal<Language>(this.detectLanguage());
  private readonly _isSelected = signal(false);

  readonly lang = this._lang.asReadonly();
  readonly isSelected = this._isSelected.asReadonly();

  readonly t = computed<Translation>(() => translations[this._lang()]);

  constructor() {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this._lang();
    }
  }

  private detectLanguage(): Language {
    if (typeof navigator === 'undefined') {
      return 'en';
    }
    const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const browserLang of browserLangs) {
      const code = browserLang?.toLowerCase().split('-')[0];
      if (code === 'pt' || code === 'ru' || code === 'en') {
        return code;
      }
    }
    return 'en';
  }

  /** Changes the displayed language without confirming the user's choice. */
  previewLanguage(lang: Language): void {
    this._lang.set(lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  setLanguage(lang: Language): void {
    this.previewLanguage(lang);
    this._isSelected.set(true);
  }

  confirmLanguage(): void {
    this._isSelected.set(true);
  }
}
