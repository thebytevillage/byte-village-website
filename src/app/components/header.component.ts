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

      <!-- Hamburger: mobile only -->
      <button class="hamburger" (click)="toggleMenu()"
              [class.open]="menuOpen()"
              [attr.aria-expanded]="menuOpen()"
              aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>

      <!-- Mobile drawer -->
      @if (menuOpen()) {
        <div class="mobile-drawer">
          <nav class="mobile-nav" aria-label="Mobile">
            @for (link of nav; track link.href) {
              <a [href]="link.href" (click)="menuOpen.set(false)">{{ link.labelKey | t }}</a>
            }
          </nav>
          <div class="mobile-foot">
            <div class="lang" role="group" aria-label="Language">
              @for (l of locales; track l) {
                <button (click)="setLocale(l)" [class.active]="i18n.locale() === l">{{ $any('nav.lang.' + l) | t }}</button>
              }
            </div>
            <a class="bv-btn bv-btn--primary mobile-cta" href="#contact" (click)="menuOpen.set(false)">{{ 'cta.contactUs' | t }}</a>
          </div>
        </div>
      }
    </header>
  `,
  styles: [`
    .bv-header {
      position: sticky; top: 0; z-index: 50;
      display: flex; align-items: center; justify-content: space-between;
      gap: 24px;
      padding: 18px var(--bv-page-pad);
      background: rgba(255,255,255,0.92);
      backdrop-filter: saturate(180%) blur(14px);
      -webkit-backdrop-filter: saturate(180%) blur(14px);
      border-bottom: 1px solid transparent;
      transition: border-color .2s ease;
    }
    .bv-header.scrolled { border-bottom-color: var(--bv-border); }

    .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: var(--bv-text); font-weight: 700; flex-shrink: 0; }
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

    /* ── Hamburger ── */
    .hamburger {
      display: none;
      flex-direction: column; justify-content: center; align-items: center;
      gap: 5px;
      width: 40px; height: 40px;
      padding: 0; border: none; background: transparent; cursor: pointer;
      border-radius: 8px;
      flex-shrink: 0;
    }
    .hamburger span {
      display: block; width: 22px; height: 2px;
      background: var(--bv-text); border-radius: 2px;
      transition: transform .22s ease, opacity .18s ease;
    }
    .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* ── Mobile drawer ── */
    .mobile-drawer {
      position: absolute;
      top: 100%; left: 0; right: 0;
      background: white;
      border-bottom: 1px solid var(--bv-border);
      box-shadow: 0 12px 32px rgba(0,0,0,0.10);
      padding: 12px var(--bv-page-pad) 24px;
      animation: bv-slide-down .18s ease;
    }
    @keyframes bv-slide-down { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

    .mobile-nav { display: flex; flex-direction: column; }
    .mobile-nav a {
      text-decoration: none; color: var(--bv-text); font-size: 17px; font-weight: 500;
      padding: 14px 0; border-bottom: 1px solid var(--bv-border);
    }
    .mobile-nav a:last-child { border-bottom: none; }

    .mobile-foot { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-top: 20px; }
    .mobile-cta { width: 100%; justify-content: center; }

    /* ── Responsive breakpoints ── */
    @media (max-width: 880px) {
      .nav { display: none; }
      .actions { display: none; }
      .hamburger { display: flex; }
    }

    @media (max-width: 480px) {
      .brand__word { display: none; }
    }
  `],
})
export class HeaderComponent {
  i18n = inject(I18nService);
  nav = NAV_LINKS;
  logo = BRAND.logoSvgPath;
  locales: Locale[] = ['en', 'fr', 'sw'];
  scrolled = signal(false);
  menuOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.scrolled.set(window.scrollY > 8), { passive: true });
    }
  }

  setLocale(l: Locale) {
    this.i18n.setLocale(l);
    document.title = this.i18n.t('page.title');
  }

  toggleMenu() { this.menuOpen.update(v => !v); }
}
