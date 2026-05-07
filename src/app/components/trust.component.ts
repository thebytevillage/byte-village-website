import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../i18n/t.pipe';
import { TRUST_LOGOS } from '../site-content';

@Component({
  selector: 'bv-trust',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <section class="trust">
      <p class="trust__title">{{ 'trust.title' | t }}</p>
      <ul class="trust__row">
        @for (logo of logos; track $index) {
          <li class="trust__item">
            @if (logo.imgSrc) {
              <img [src]="logo.imgSrc" [alt]="logo.alt || ''" />
            } @else {
              <span class="trust__placeholder">{{ logo.placeholderKey! | t }}</span>
            }
          </li>
        }
      </ul>
    </section>
  `,
  styles: [`
    .trust { padding: 24px var(--bv-page-pad) 56px; border-top: 1px solid var(--bv-border); }
    .trust__title { text-align: center; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--bv-text-muted); margin: 0 0 24px; }
    .trust__row { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; align-items: center; }
    @media (max-width: 880px) { .trust__row { grid-template-columns: repeat(3, 1fr); } }
    .trust__item { display: flex; align-items: center; justify-content: center; height: 56px; border: 1px dashed var(--bv-border-strong); border-radius: var(--bv-radius-sm); }
    .trust__placeholder { font: 500 12px/1 var(--bv-mono); color: var(--bv-text-faint); letter-spacing: 0.06em; text-transform: uppercase; }
  `],
})
export class TrustComponent {
  logos = TRUST_LOGOS;
}
