import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../i18n/t.pipe';
import { HERO } from '../site-content';

@Component({
  selector: 'bv-hero',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <section class="hero" id="top">
      <div class="hero__grid">
        <div class="hero__copy">
          <span class="bv-eyebrow">{{ hero.eyebrowKey | t }}</span>
          <h1 class="bv-h1 hero__title">
            {{ hero.titleSegments.leadKey | t }}
            <span class="hero__title-row">
              <span class="hero__title-accent">{{ hero.titleSegments.accentKey | t }}</span>
            </span>
            {{ hero.titleSegments.midKey | t }}
            <span class="hero__title-highlight">{{ hero.titleSegments.highlightKey | t }}</span>
          </h1>
          <p class="bv-lead hero__sub">{{ hero.subtitleKey | t }}</p>
          <div class="hero__cta">
            <a class="bv-btn bv-btn--primary" [href]="hero.primaryCta.href">{{ hero.primaryCta.labelKey | t }}</a>
            <a class="bv-btn bv-btn--ghost" [href]="hero.secondaryCta.href">{{ hero.secondaryCta.labelKey | t }}</a>
          </div>
          <ul class="hero__metrics">
            @for (m of hero.metrics; track m.labelKey) {
              <li>
                <div class="hero__metric-val">
                  <span class="hero__metric-num">{{ m.value }}</span>
                  <span class="hero__metric-unit">{{ m.unit }}</span>
                </div>
                <div class="hero__metric-label">{{ m.labelKey | t }}</div>
              </li>
            }
          </ul>
        </div>

        <!-- Floating product cards -->
        <div class="hero__visual" aria-hidden="true">
          <div class="hero__bg-hex">
            <svg viewBox="0 0 200 200" fill="none">
              <path d="M100 6 L182 53 L182 147 L100 194 L18 147 L18 53 Z"
                stroke="var(--bv-blue)" stroke-width="1" stroke-dasharray="2 4" opacity="0.25" />
              <path d="M100 26 L162 65 L162 135 L100 174 L38 135 L38 65 Z"
                stroke="var(--bv-blue)" stroke-width="1" stroke-dasharray="2 4" opacity="0.18" />
            </svg>
          </div>

          <div class="card card--volume">
            <div class="card__head">
              <span class="card__title">{{ 'hero.card.volume.title' | t }}</span>
              <span class="card__dot"></span>
            </div>
            <div class="card__metric">{{ 'hero.card.volume.metric' | t }}</div>
            <div class="card__delta">▲ {{ 'hero.card.volume.delta' | t }}</div>
            <svg viewBox="0 0 200 60" class="card__chart">
              <path d="M0 50 L20 42 L40 46 L60 30 L80 36 L100 22 L120 26 L140 14 L160 18 L180 8 L200 12"
                fill="none" stroke="var(--bv-blue)" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M0 50 L20 42 L40 46 L60 30 L80 36 L100 22 L120 26 L140 14 L160 18 L180 8 L200 12 L200 60 L0 60 Z"
                fill="url(#g)" opacity="0.18"/>
              <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="var(--bv-blue)"/>
                <stop offset="1" stop-color="var(--bv-blue)" stop-opacity="0"/>
              </linearGradient></defs>
            </svg>
          </div>

          <div class="card card--region">
            <div class="card__head">
              <span class="card__title">{{ 'hero.card.region.title' | t }}</span>
            </div>
            <div class="card__regions">
              <span class="pill"><span class="pill__dot"></span>Nairobi</span>
              <span class="pill"><span class="pill__dot"></span>Lagos</span>
              <span class="pill"><span class="pill__dot"></span>Accra</span>
            </div>
            <div class="card__caption">{{ 'hero.card.region.status' | t }}</div>
          </div>

          <div class="card card--signal">
            <div class="card__signal">
              <div class="card__signal-bars"><span></span><span></span><span></span><span></span></div>
              <div>
                <div class="card__title">{{ 'hero.card.signal.title' | t }}</div>
                <div class="card__caption">{{ 'hero.card.signal.body' | t }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { padding: clamp(56px, 7vw, 96px) var(--bv-page-pad) clamp(72px, 8vw, 120px); position: relative; overflow: hidden; }
    .hero::before {
      content: ''; position: absolute; inset: -10% -10% auto auto; width: 60%; height: 60%;
      background: radial-gradient(ellipse at center, rgba(20,51,214,0.10), transparent 60%);
      pointer-events: none;
    }
    .hero__grid {
      display: grid; grid-template-columns: 1.1fr 1fr; gap: clamp(40px, 5vw, 80px); align-items: center;
    }
    @media (max-width: 980px) { .hero__grid { grid-template-columns: 1fr; } }

    .hero__title { margin-top: 18px; }
    .hero__title-row { display: block; }
    .hero__title-accent {
      display: inline-block;
      background: linear-gradient(180deg, var(--bv-blue), var(--bv-blue-deep));
      -webkit-background-clip: text; background-clip: text; color: transparent;
    }
    .hero__title-highlight {
      display: inline-block; position: relative; padding: 0 0.08em;
    }
    .hero__title-highlight::before {
      content: ''; position: absolute; inset: auto 0 0.06em; height: 0.42em;
      background: var(--bv-yellow); z-index: -1; border-radius: 4px;
    }
    .hero__sub { margin: 28px 0 32px; max-width: 560px; }
    .hero__cta { display: flex; gap: 12px; flex-wrap: wrap; }
    .hero__metrics {
      list-style: none; padding: 0; margin: 56px 0 0;
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
      border-top: 1px solid var(--bv-border); padding-top: 28px;
    }
    @media (max-width: 720px) { .hero__metrics { grid-template-columns: repeat(2, 1fr); } }
    .hero__metric-val { display: inline-flex; align-items: baseline; gap: 2px; }
    .hero__metric-num { font: 700 clamp(28px, 3vw, 36px)/1 var(--bv-font); letter-spacing: -0.02em; }
    .hero__metric-unit { font: 600 16px/1 var(--bv-font); color: var(--bv-text-muted); }
    .hero__metric-label { font-size: 13px; color: var(--bv-text-muted); margin-top: 4px; }

    .hero__visual { position: relative; aspect-ratio: 1 / 1.05; min-height: 480px; }
    .hero__bg-hex { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
    .hero__bg-hex svg { width: 96%; height: 96%; }

    .card {
      position: absolute; background: white; border: 1px solid var(--bv-border);
      border-radius: var(--bv-radius); padding: 18px;
      box-shadow: var(--bv-shadow-float);
    }
    .card--volume { top: 6%; left: 4%; width: 60%; }
    .card--region { bottom: 12%; left: 14%; width: 56%; }
    .card--signal { top: 28%; right: 4%; width: 48%; }

    .card__head { display: flex; align-items: center; justify-content: space-between; }
    .card__title { font-size: 13px; font-weight: 600; color: var(--bv-text-muted); }
    .card__dot { width: 8px; height: 8px; border-radius: 999px; background: #22C55E; box-shadow: 0 0 0 4px rgba(34,197,94,0.18); }
    .card__metric { font: 800 32px/1 var(--bv-font); letter-spacing: -0.02em; margin-top: 8px; }
    .card__delta { font: 600 12px/1 var(--bv-font); color: #16A34A; margin-top: 6px; }
    .card__chart { width: 100%; height: 60px; margin-top: 6px; }

    .card__regions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
    .pill { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; background: var(--bv-bg-mid); font: 500 12px/1 var(--bv-font); }
    .pill__dot { width: 6px; height: 6px; border-radius: 999px; background: var(--bv-blue); }
    .card__caption { font-size: 12px; color: var(--bv-text-muted); margin-top: 10px; }

    .card__signal { display: flex; align-items: center; gap: 12px; }
    .card__signal-bars { display: inline-flex; align-items: end; gap: 3px; height: 28px; }
    .card__signal-bars span { width: 4px; background: var(--bv-blue); border-radius: 1px; }
    .card__signal-bars span:nth-child(1){ height: 30%; }
    .card__signal-bars span:nth-child(2){ height: 55%; }
    .card__signal-bars span:nth-child(3){ height: 75%; }
    .card__signal-bars span:nth-child(4){ height: 100%; background: var(--bv-yellow); }
  `],
})
export class HeroComponent {
  hero = HERO;
}
