import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../i18n/t.pipe';
import { WHY_CARDS } from '../site-content';

@Component({
  selector: 'bv-why',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <section class="why" id="why">
      <div class="why__head">
        <span class="bv-eyebrow">{{ 'why.eyebrow' | t }}</span>
        <h2 class="bv-h2">{{ 'why.title' | t }}</h2>
        <p class="bv-lead">{{ 'why.subtitle' | t }}</p>
      </div>
      <ul class="why__grid">
        @for (c of cards; track c.numberLabel) {
          <li class="card" [class.card--dark]="c.variant === 'dark'">
            <span class="card__num">{{ c.numberLabel }}</span>
            <h3 class="card__title">{{ c.titleKey | t }}</h3>
            <p class="card__body">{{ c.bodyKey | t }}</p>
            @if (c.cta) {
              <a class="card__cta" [href]="c.cta.href">{{ c.cta.labelKey | t }}</a>
            }
          </li>
        }
      </ul>
    </section>
  `,
  styles: [`
    .why { padding: clamp(72px, 9vw, 132px) var(--bv-page-pad); background: var(--bv-bg-soft); }
    .why__head { max-width: 720px; margin: 0 auto 56px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 18px; }
    .why__head .bv-lead { margin: 0; }
    .why__grid { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    @media (max-width: 980px) { .why__grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .why__grid { grid-template-columns: 1fr; } }
    .card { background: white; border: 1px solid var(--bv-border); border-radius: var(--bv-radius); padding: 28px; }
    .card--dark { background: var(--bv-navy); color: white; border-color: transparent; }
    .card__num { font: 600 12px/1 var(--bv-mono); color: var(--bv-text-muted); letter-spacing: 0.08em; }
    .card--dark .card__num { color: var(--bv-yellow); }
    .card__title { font: 700 22px/1.2 var(--bv-font); letter-spacing: -0.015em; margin: 16px 0 10px; }
    .card__body { font-size: 15px; color: var(--bv-text-muted); margin: 0; }
    .card--dark .card__body { color: rgba(255,255,255,0.72); }
    .card__cta { display: inline-block; margin-top: 18px; font-weight: 600; color: var(--bv-yellow); text-decoration: none; }
  `],
})
export class WhyComponent {
  cards = WHY_CARDS;
}
