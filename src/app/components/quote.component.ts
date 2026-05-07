import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../i18n/t.pipe';

@Component({
  selector: 'bv-quote',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <section class="quote">
      <p class="quote__text">
        <span class="quote__lead">{{ 'quote.lead' | t }}</span>
        <span class="quote__hi">{{ 'quote.highlight' | t }}</span>
      </p>
      <p class="quote__attr">{{ 'quote.attr' | t }}</p>
    </section>
  `,
  styles: [`
    .quote { padding: clamp(96px, 11vw, 160px) var(--bv-page-pad); text-align: center; background: var(--bv-navy); color: white; }
    .quote__text { font: 700 clamp(36px, 5vw, 64px)/1.1 var(--bv-font); letter-spacing: -0.025em; margin: 0; max-width: 1100px; margin: 0 auto; text-wrap: balance; }
    .quote__lead { color: rgba(255,255,255,0.55); display: block; }
    .quote__hi { color: var(--bv-yellow); display: block; margin-top: 8px; }
    .quote__attr { font: 500 14px/1 var(--bv-mono); color: rgba(255,255,255,0.5); margin-top: 36px; letter-spacing: 0.06em; }
  `],
})
export class QuoteComponent {}
