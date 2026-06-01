import { Injectable, signal, computed } from '@angular/core';
import { Language, Translation, translations } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _lang = signal<Language>('en');
  private readonly _isSelected = signal(false);

  readonly lang = this._lang.asReadonly();
  readonly isSelected = this._isSelected.asReadonly();

  readonly t = computed<Translation>(() => translations[this._lang()]);

  setLanguage(lang: Language): void {
    this._lang.set(lang);
    this._isSelected.set(true);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }
}
