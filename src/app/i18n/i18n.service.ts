import { Injectable, signal, computed } from '@angular/core';
import { I18nKey, Locale } from './strings';
import { EN } from './strings.en';
import { FR } from './strings.fr';
import { SW } from './strings.sw';

const DICTS = { en: EN, fr: FR, sw: SW };
const STORAGE_KEY = 'bv.locale';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly _locale = signal<Locale>(this.detectInitial());
  readonly locale = this._locale.asReadonly();
  readonly dict = computed(() => DICTS[this._locale()]);

  setLocale(locale: Locale) {
    this._locale.set(locale);
    try { localStorage.setItem(STORAGE_KEY, locale); } catch {}
    document.documentElement.lang = locale;
  }

  t(key: I18nKey): string {
    return this.dict()[key] ?? key;
  }

  private detectInitial(): Locale {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && (saved === 'en' || saved === 'fr' || saved === 'sw')) return saved;
    } catch {}
    const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en').slice(0, 2);
    if (nav === 'fr') return 'fr';
    if (nav === 'sw') return 'sw';
    return 'en';
  }
}
