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

        <!-- Hero brand visual -->
        <div class="hero__visual" aria-hidden="true">
          <!-- Subtle grid background -->
          <div class="hero__grid-bg"></div>

          <!-- Floating logo orb -->
          <div class="hero__orb-wrap">
            <div class="hero__orb-shadow"></div>
            <img src="assets/logo-mark-yellow.svg" alt="Byte Village" class="hero__orb-logo" />
          </div>

          <!-- Floating badges -->
          <div class="hero__badge hero__badge--tl">
            <span class="badge__dot badge__dot--green"></span>
            <span>Kampala, UG</span>
          </div>
          <div class="hero__badge hero__badge--tr">
            <span>99.99% uptime</span>
            <span class="badge__icon">↑</span>
          </div>
          <div class="hero__badge hero__badge--bl">
            <span class="badge__dot badge__dot--yellow"></span>
            <span>MTN · Airtel live</span>
          </div>
          <div class="hero__badge hero__badge--br">
            <span>6 countries</span>
            <span class="badge__icon">🌍</span>
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

    .hero__visual {
      position: relative;
      aspect-ratio: 1 / 1;
      min-height: 420px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Subtle dot-grid background */
    .hero__grid-bg {
      position: absolute; inset: 0; border-radius: 24px;
      background-image: radial-gradient(circle, rgba(20,51,214,0.12) 1px, transparent 1px);
      background-size: 28px 28px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
    }

    /* Orb wrapper animates up/down */
    .hero__orb-wrap {
      position: relative;
      display: flex; flex-direction: column; align-items: center;
      animation: bv-float 3.2s ease-in-out infinite;
      z-index: 2;
    }
    @keyframes bv-float {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-22px); }
    }

    /* Squash-and-stretch shadow that shrinks as the B rises */
    .hero__orb-shadow {
      width: 120px; height: 18px;
      background: radial-gradient(ellipse, rgba(20,51,214,0.22) 0%, transparent 70%);
      border-radius: 50%;
      margin-bottom: 18px;
      animation: bv-shadow 3.2s ease-in-out infinite;
    }
    @keyframes bv-shadow {
      0%, 100% { transform: scaleX(1);   opacity: 1;    }
      50%       { transform: scaleX(0.6); opacity: 0.45; }
    }

    .hero__orb-logo {
      width: 360px; height: 390px;
      object-fit: contain;
      filter: drop-shadow(0 6px 18px rgba(248,214,19,0.45));
    }

    /* Floating info badges */
    .hero__badge {
      position: absolute;
      display: inline-flex; align-items: center; gap: 7px;
      padding: 9px 14px;
      background: white;
      border: 1px solid var(--bv-border);
      border-radius: 999px;
      font: 600 12px/1 var(--bv-font);
      color: var(--bv-text);
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      white-space: nowrap;
      z-index: 3;
    }
    .hero__badge--tl { top: 10%;  left: 0;   animation: bv-float 3.8s ease-in-out 0.4s infinite; }
    .hero__badge--tr { top: 18%;  right: 0;  animation: bv-float 3.4s ease-in-out 1.1s infinite; }
    .hero__badge--bl { bottom: 22%; left: 2%; animation: bv-float 4.0s ease-in-out 0.7s infinite; }
    .hero__badge--br { bottom: 12%; right: 0; animation: bv-float 3.6s ease-in-out 1.6s infinite; }

    .badge__dot {
      width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
    }
    .badge__dot--green  { background: #22C55E; box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
    .badge__dot--yellow { background: var(--bv-yellow); box-shadow: 0 0 0 3px rgba(248,214,19,0.25); }
    .badge__icon { font-size: 14px; }
  `],
})
export class HeroComponent {
  hero = HERO;
}
