import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../i18n/t.pipe';
import { BRAND, FOOTER_COLUMNS } from '../site-content';

@Component({
  selector: 'bv-footer',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__mark">
            <img [src]="logo" alt="" width="36" height="36" />
            <span>Byte Village</span>
          </div>
          <p class="footer__tagline">{{ 'footer.tagline' | t }}</p>
          <div class="footer__socials">
            <a [href]="socials.x" aria-label="X">𝕏</a>
            <a [href]="socials.linkedin" aria-label="LinkedIn">in</a>
            <a [href]="socials.github" aria-label="GitHub">{{ '{}' }}</a>
          </div>
        </div>
        <div class="footer__cols">
          @for (col of cols; track col.titleKey) {
            <div class="footer__col">
              <h4>{{ col.titleKey | t }}</h4>
              <ul>
                @for (l of col.links; track l.href) {
                  <li><a [href]="l.href">{{ l.labelKey | t }}</a></li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
      <div class="footer__bottom">
        <span>{{ 'footer.copyright' | t }}</span>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: var(--bv-navy); color: rgba(255,255,255,0.72); padding: 80px var(--bv-page-pad) 32px; }
    .footer__top { display: grid; grid-template-columns: 1.2fr 2fr; gap: 48px; padding-bottom: 56px; border-bottom: 1px solid rgba(255,255,255,0.1); }
    @media (max-width: 880px) { .footer__top { grid-template-columns: 1fr; } }
    .footer__mark { display: flex; align-items: center; gap: 12px; font: 700 18px/1 var(--bv-font); color: white; }
    .footer__tagline { margin: 22px 0 28px; max-width: 320px; font-size: 15px; }
    .footer__socials { display: flex; gap: 12px; }
    .footer__socials a { width: 40px; height: 40px; border-radius: 999px; background: rgba(255,255,255,0.06); display: inline-flex; align-items: center; justify-content: center; color: white; text-decoration: none; font-weight: 600; }
    .footer__cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    @media (max-width: 640px) { .footer__cols { grid-template-columns: repeat(2, 1fr); } }
    .footer__col h4 { color: white; font: 600 13px/1 var(--bv-font); letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 16px; }
    .footer__col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
    .footer__col a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 14px; }
    .footer__col a:hover { color: white; }
    .footer__bottom { padding-top: 28px; font-size: 12px; color: rgba(255,255,255,0.4); }
  `],
})
export class FooterComponent {
  cols = FOOTER_COLUMNS;
  logo = BRAND.logoSvgPath;
  socials = BRAND.socials;
}
