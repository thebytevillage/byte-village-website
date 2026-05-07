import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../i18n/t.pipe';
import { I18nService } from '../i18n/i18n.service';
import { Locale } from '../i18n/strings';
import { BRAND, NAV_LINKS } from '../site-content';

@Component({
  selector: 'bv-header',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <header class="bv-header" [class.scrolled]="scrolled()">
      <a class="brand" href="#top" aria-label="Byte Village home">
        <img [src]="logo" alt="" width="32" height="32" />
        <span class="brand__word">Byte Village</span>
      </a>
      <nav class="nav" aria-label="Main">
        @for (link of nav; track link.href) {
          <a [href]="link.href">{{ link.labelKey | t }}</a>
        }
      </nav>
      <div class="actions">
        <div class="lang" role="group" aria-label="Language">
          @for (l of locales; track l) {
            <button (click)="setLocale(l)" [class.active]="i18n.locale() === l">{{ $any('nav.lang.' + l) | t }}</button>
          }
        </div>
        <a class="bv-btn bv-btn--primary" href="#contact">{{ 'cta.contactUs' | t }}</a>
      </div>
    </header>
  `,
  styles: [`
    .bv-header {
      position: sticky; top: 0; z-index: 50;
      display: flex; align-items: center; justify-content: space-between;
      gap: 24px;
      padding: 18px var(--bv-page-pad);
      background: rgba(255,255,255,0.85);
      backdrop-filter: saturate(180%) blur(14px);
      -webkit-backdrop-filter: saturate(180%) blur(14px);
      border-bottom: 1px solid transparent;
      transition: border-color .2s ease;
    }
    .bv-header.scrolled { border-bottom-color: var(--bv-border); }
    .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: var(--bv-text); font-weight: 700; }
    .brand__word { font-size: 17px; letter-spacing: -0.01em; }
    .nav { display: flex; gap: 28px; }
    .nav a { text-decoration: none; color: var(--bv-text); font-size: 14px; font-weight: 500; opacity: 0.78; }
    .nav a:hover { opacity: 1; }
    .actions { display: flex; align-items: center; gap: 16px; }
    .lang { display: inline-flex; gap: 2px; padding: 3px; border-radius: 999px; background: var(--bv-bg-mid); }
    .lang button {
      border: none; background: transparent; cursor: pointer;
      padding: 6px 12px; border-radius: 999px;
      font: 600 12px/1 var(--bv-font); letter-spacing: 0.06em; color: var(--bv-text-muted);
    }
    .lang button.active { background: var(--bv-text); color: white; }
    @media (max-width: 880px) {
      .nav { display: none; }
    }
  `],
})
export class HeaderComponent {
  i18n = inject(I18nService);
  nav = NAV_LINKS;
  logo = BRAND.logoSvgPath;
  locales: Locale[] = ['en', 'fr', 'sw'];
  scrolled = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.scrolled.set(window.scrollY > 8), { passive: true });
    }
  }

  setLocale(l: Locale) {
    this.i18n.setLocale(l);
    document.title = this.i18n.t('page.title');
  }
}
