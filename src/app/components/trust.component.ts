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
            <img [src]="logo.imgSrc" [alt]="logo.alt || ''" />
          </li>
        }
      </ul>
    </section>
  `,
  styles: [`
    .trust { padding: 24px var(--bv-page-pad) 56px; border-top: 1px solid var(--bv-border); }
    .trust__title { text-align: center; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--bv-text-muted); margin: 0 0 24px; }
    .trust__row { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: center; }
    .trust__item { display: flex; align-items: center; justify-content: center; height: 64px; min-width: 140px; padding: 10px 24px; border: 1px solid var(--bv-border); border-radius: var(--bv-radius-sm); background: white; }
    .trust__item img { max-height: 40px; max-width: 140px; width: auto; object-fit: contain; filter: grayscale(20%); transition: filter .2s; }
    .trust__item img:hover { filter: grayscale(0%); }
  `],
})
export class TrustComponent {
  logos = TRUST_LOGOS;
}
