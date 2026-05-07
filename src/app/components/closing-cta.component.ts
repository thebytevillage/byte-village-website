import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../i18n/t.pipe';

@Component({
  selector: 'bv-closing-cta',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <section class="cta" id="contact">
      <div class="cta__inner">
        <h2 class="bv-h2">{{ 'closing.title' | t }}</h2>
        <p class="bv-lead">{{ 'closing.subtitle' | t }}</p>
        <div class="cta__btns">
          <a class="bv-btn bv-btn--yellow" href="#">{{ 'cta.startBuilding' | t }}</a>
          <a class="bv-btn bv-btn--ghost-light" href="#">{{ 'cta.talkToSales' | t }}</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta { padding: clamp(72px, 9vw, 132px) var(--bv-page-pad); background: var(--bv-blue); color: white; text-align: center; }
    .cta__inner { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 24px; }
    .cta .bv-lead { color: rgba(255,255,255,0.78); margin: 0; }
    .cta__btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 8px; }
  `],
})
export class ClosingCtaComponent {}
