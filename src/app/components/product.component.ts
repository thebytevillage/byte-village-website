import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../i18n/t.pipe';
import { Product } from '../site-content';

/**
 * Renders one product section (Alfasente, ByteCloud, Developers, Byte Lab).
 * Visual panel switches on `product.visualKind`.
 */
@Component({
  selector: 'bv-product',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <section class="product"
             [id]="product.id"
             [class.product--reverse]="product.reverse"
             [class.product--dark]="product.visualTone === 'dark'">
      <div class="product__grid">
        <div class="product__copy">
          <span class="tag">
            <span class="tag__glyph">{{ product.tagGlyph }}</span>
            {{ product.tagKey | t }}
            @if (product.comingSoon) {
              <span class="tag__coming">{{ 'product.bytecloud.comingSoon' | t }}</span>
            }
          </span>
          <h2 class="bv-h2">{{ product.titleKey | t }}</h2>
          <p class="bv-lead">{{ product.bodyKey | t }}</p>
          <ul class="features">
            @for (f of product.features; track f.titleKey) {
              <li>
                <span class="features__icon">{{ f.iconGlyph }}</span>
                <div>
                  <div class="features__title">{{ f.titleKey | t }}</div>
                  <div class="features__body">{{ f.bodyKey | t }}</div>
                </div>
              </li>
            }
          </ul>
          @if (product.taglineKey) {
            <p class="tagline">{{ product.taglineKey | t }}</p>
          }
          <a class="bv-btn"
             [class.bv-btn--primary]="product.cta.style === 'primary'"
             [class.bv-btn--yellow]="product.cta.style === 'yellow'"
             [class.bv-btn--ghost]="product.cta.style === 'ghost'"
             [href]="product.cta.href"
             [target]="product.cta.href.startsWith('http') ? '_blank' : '_self'"
             [rel]="product.cta.href.startsWith('http') ? 'noopener noreferrer' : null">{{ product.cta.labelKey | t }}</a>
        </div>

        <div class="product__visual">
          @switch (product.visualKind) {
            @case ('pos')      { <ng-container *ngTemplateOutlet="pos"></ng-container> }
            @case ('cloud')    { <ng-container *ngTemplateOutlet="cloud"></ng-container> }
            @case ('code')     { <ng-container *ngTemplateOutlet="code"></ng-container> }
            @case ('pipeline') { <ng-container *ngTemplateOutlet="pipeline"></ng-container> }
          }
        </div>
      </div>
    </section>

    <!-- POS visual (Alfasente) -->
    <ng-template #pos>
      <div class="pos-visual">
        <div class="pos-visual__frame">
          <div class="pos-visual__bar">
            <span class="d r"></span><span class="d y"></span><span class="d g"></span>
            <span class="pos-visual__url">pos.alfasente.com</span>
          </div>
          <img
            src="https://pos.alfasente.com/_next/image?url=%2Fimages%2Fheroimage.png&w=1200&q=85"
            alt="Alfasente POS dashboard"
            class="pos-visual__img"
          />
        </div>
        <div class="pos-visual__badge pos-visual__badge--tl">
          <span class="pos-dot pos-dot--green"></span>MTN MoMo live
        </div>
        <div class="pos-visual__badge pos-visual__badge--br">
          <span class="pos-dot pos-dot--red"></span>Airtel Money live
        </div>
      </div>
    </ng-template>

    <!-- Cloud visual (ByteCloud) -->
    <ng-template #cloud>
      <div class="cloud">
        <div class="cloud__pill cloud__pill--top">99.99% uptime</div>
        <svg viewBox="0 0 400 360" class="cloud__map">
          <path d="M180,30 C220,40 260,80 270,130 C290,160 280,200 250,220 C260,260 230,290 200,300 C170,330 130,330 110,310 C80,310 60,280 70,250 C50,220 60,180 90,170 C90,130 110,90 140,70 C150,40 170,30 180,30 Z"
            fill="rgba(20,51,214,0.18)" stroke="rgba(20,51,214,0.6)" stroke-width="1.2"/>
          <g class="cloud__pings">
            <circle cx="180" cy="120" r="6" fill="var(--bv-yellow)"/>
            <circle cx="180" cy="120" r="6" fill="none" stroke="var(--bv-yellow)" class="ring"/>
            <circle cx="220" cy="180" r="5" fill="white"/>
            <circle cx="220" cy="180" r="5" fill="none" stroke="white" class="ring r2"/>
            <circle cx="140" cy="220" r="5" fill="white"/>
            <circle cx="140" cy="220" r="5" fill="none" stroke="white" class="ring r3"/>
            <circle cx="200" cy="270" r="5" fill="white"/>
          </g>
        </svg>
        <div class="cloud__pill cloud__pill--bot">4 regions live</div>
        <div class="cloud__pill cloud__pill--side">$0.012 / GB-hr</div>
      </div>
    </ng-template>

    <!-- Code visual (Developers) -->
    <ng-template #code>
      <div class="code">
        <div class="code__bar"><span class="d r"></span><span class="d y"></span><span class="d g"></span><span class="code__file">payments.ts</span></div>
        <pre class="code__body"><span class="kw">import</span> {{ '{' }} ByteVillage {{ '}' }} <span class="kw">from</span> <span class="str">'&#64;bytevillage/sdk'</span>;

<span class="kw">const</span> bv = <span class="kw">new</span> <span class="cls">ByteVillage</span>({{ '{' }} apiKey: process.env.BV_KEY {{ '}' }});

<span class="kw">const</span> charge = <span class="kw">await</span> bv.payments.create({{ '{' }}
  amount: <span class="num">2400</span>,
  currency: <span class="str">'KES'</span>,
  source: {{ '{' }} type: <span class="str">'mpesa'</span>, msisdn: <span class="str">'+254712...'</span> {{ '}' }},
  idempotency_key: <span class="str">'order_58291'</span>,
{{ '}' }});

<span class="cmt">// → succeeded in 6.3s · 99.99% uptime</span></pre>
      </div>
    </ng-template>

    <!-- Pipeline visual (Byte Lab) -->
    <ng-template #pipeline>
      <div class="pipeline">
        <div class="pipeline__title">Workstream pipeline</div>
        <ol class="pipeline__steps">
          <li><span class="step__n">1</span><div><strong>Discovery</strong><small>Research, scope</small></div></li>
          <li><span class="step__n">2</span><div><strong>Design</strong><small>UX, architecture</small></div></li>
          <li class="active"><span class="step__n">3</span><div><strong>Build</strong><small>Engineering</small></div></li>
          <li><span class="step__n">4</span><div><strong>Test</strong><small>QA, security</small></div></li>
          <li><span class="step__n">5</span><div><strong>Ship</strong><small>Launch &amp; monitor</small></div></li>
          <li><span class="step__n">∞</span><div><strong>Evolve</strong><small>Iterate, scale</small></div></li>
        </ol>
        <div class="pipeline__active">
          <div class="active__head">Active workstreams · 4</div>
          <ul>
            <li><span class="dot"></span>Banking core migration <em>Build · 64%</em></li>
            <li><span class="dot y"></span>Telco wallet API <em>Test · 88%</em></li>
            <li><span class="dot"></span>Gov ID verification <em>Design · 32%</em></li>
          </ul>
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    .product { padding: clamp(72px, 9vw, 132px) var(--bv-page-pad); }
    .product--dark { background: var(--bv-navy); color: white; }
    .product--dark .bv-lead { color: rgba(255,255,255,0.72); }
    .product--dark .features__body { color: rgba(255,255,255,0.62); }
    .product--dark .tag { background: rgba(255,255,255,0.08); color: white; }
    .product--dark .tagline { color: rgba(255,255,255,0.5); }

    .product__grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 5vw, 80px); align-items: center; }
    .product--reverse .product__grid > .product__copy { order: 2; }
    @media (max-width: 980px) {
      .product__grid { grid-template-columns: 1fr; }
      .product--reverse .product__grid > .product__copy { order: 0; }
    }

    .tag { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; background: var(--bv-bg-mid); font: 600 12px/1 var(--bv-font); letter-spacing: 0.06em; text-transform: uppercase; color: var(--bv-text); }
    .tag__glyph { font-size: 14px; }
    .tag__coming { background: var(--bv-yellow); color: var(--bv-text); padding: 3px 8px; border-radius: 999px; font-size: 10px; }

    .product__copy h2 { margin-top: 18px; }
    .product__copy .bv-lead { margin: 22px 0 32px; max-width: 540px; }

    .features { list-style: none; padding: 0; margin: 0 0 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .features li { display: flex; gap: 14px; align-items: flex-start; }
    .features__icon {
      flex-shrink: 0;
      display: inline-flex; align-items: center; justify-content: center;
      width: 36px; height: 36px; border-radius: 10px;
      background: var(--bv-bg-mid); color: var(--bv-blue);
      font-weight: 700;
    }
    .product--dark .features__icon { background: rgba(255,255,255,0.08); color: var(--bv-yellow); }
    .features__title { font-weight: 600; font-size: 15px; margin-bottom: 4px; }
    .features__body { font-size: 14px; color: var(--bv-text-muted); }
    .tagline { font: 400 13px/1.5 var(--bv-mono); color: var(--bv-text-muted); margin: 0 0 24px; }

    /* POS visual */
    .product__visual { position: relative; min-height: 480px; display: flex; align-items: center; justify-content: center; }
    .pos-visual { position: relative; width: 100%; }
    .pos-visual__frame {
      border-radius: 12px; overflow: hidden;
      box-shadow: var(--bv-shadow-float);
      border: 1px solid var(--bv-border);
    }
    .pos-visual__bar {
      display: flex; align-items: center; gap: 6px; padding: 10px 14px;
      background: #F1F5F9; border-bottom: 1px solid var(--bv-border);
    }
    .pos-visual__bar .d { width: 10px; height: 10px; border-radius: 999px; }
    .pos-visual__bar .r { background: #FF6B6B; }
    .pos-visual__bar .y { background: #F8D613; }
    .pos-visual__bar .g { background: #4ADE80; }
    .pos-visual__url { margin-left: 10px; font: 500 11px/1 var(--bv-mono); color: var(--bv-text-muted); }
    .pos-visual__img { display: block; width: 100%; height: auto; }
    .pos-visual__badge {
      position: absolute; display: inline-flex; align-items: center; gap: 7px;
      padding: 8px 14px; background: white; border: 1px solid var(--bv-border);
      border-radius: 999px; font: 600 12px/1 var(--bv-font); color: var(--bv-text);
      box-shadow: 0 4px 16px rgba(0,0,0,0.08); white-space: nowrap;
    }
    .pos-visual__badge--tl { top: -14px; left: 12px; }
    .pos-visual__badge--br { bottom: -14px; right: 12px; }
    .pos-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
    .pos-dot--green { background: #22C55E; box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
    .pos-dot--red   { background: #EF4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.2); }

    /* Cloud */
    .cloud { position: relative; width: 100%; aspect-ratio: 1.1/1; }
    .cloud__map { width: 100%; height: 100%; }
    .cloud__pings .ring { animation: bv-ping 1.8s ease-out infinite; transform-origin: center; }
    .cloud__pings .ring.r2 { animation-delay: .6s; }
    .cloud__pings .ring.r3 { animation-delay: 1.1s; }
    @keyframes bv-ping { 0%{transform: scale(1); opacity:.8;} 100%{transform: scale(3.4); opacity:0;} }
    .cloud__pill {
      position: absolute; padding: 10px 14px; background: white; color: var(--bv-text);
      border-radius: 999px; font: 600 13px/1 var(--bv-font);
      box-shadow: var(--bv-shadow-float);
    }
    .cloud__pill--top { top: 6%; left: 4%; }
    .cloud__pill--bot { bottom: 6%; right: 6%; background: var(--bv-yellow); }
    .cloud__pill--side { top: 50%; right: -2%; }

    /* Code */
    .code { width: 100%; max-width: 540px; background: #0B0F2C; border-radius: var(--bv-radius); overflow: hidden; box-shadow: var(--bv-shadow-float); border: 1px solid rgba(255,255,255,0.08); }
    .code__bar { display: flex; align-items: center; gap: 6px; padding: 12px 16px; background: #050823; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .code__bar .d { width: 11px; height: 11px; border-radius: 999px; }
    .code__bar .r { background: #FF6B6B; }
    .code__bar .y { background: #F8D613; }
    .code__bar .g { background: #4ADE80; }
    .code__file { color: rgba(255,255,255,0.5); font: 500 12px/1 var(--bv-mono); margin-left: 10px; }
    .code__body { margin: 0; padding: 22px 24px; color: #E2E8F0; font: 400 13px/1.7 var(--bv-mono); }
    .code__body .kw { color: #F8D613; }
    .code__body .str { color: #4ADE80; }
    .code__body .cls { color: #60A5FA; }
    .code__body .num { color: #F472B6; }
    .code__body .cmt { color: rgba(255,255,255,0.4); font-style: italic; }

    /* Pipeline */
    .pipeline { width: 100%; max-width: 540px; background: white; border-radius: var(--bv-radius); padding: 28px; box-shadow: var(--bv-shadow-card); border: 1px solid var(--bv-border); color: var(--bv-text); }
    .pipeline__title { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--bv-text-muted); font-weight: 600; }
    .pipeline__steps { list-style: none; padding: 0; margin: 18px 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .pipeline__steps li { padding: 12px; border: 1px solid var(--bv-border); border-radius: 10px; display: flex; align-items: center; gap: 10px; font-size: 12px; }
    .pipeline__steps li.active { border-color: var(--bv-blue); background: rgba(20,51,214,0.05); }
    .step__n { width: 24px; height: 24px; border-radius: 999px; background: var(--bv-bg-mid); color: var(--bv-text); display: inline-flex; align-items: center; justify-content: center; font: 700 12px/1 var(--bv-font); }
    .pipeline__steps .active .step__n { background: var(--bv-blue); color: white; }
    .pipeline__steps small { display: block; color: var(--bv-text-muted); font-size: 10px; }
    .pipeline__steps strong { font-weight: 600; font-size: 13px; }
    .pipeline__active { background: var(--bv-bg-soft); border-radius: 10px; padding: 16px; }
    .active__head { font: 600 12px/1 var(--bv-font); margin-bottom: 12px; }
    .pipeline__active ul { list-style: none; padding: 0; margin: 0; }
    .pipeline__active li { display: flex; align-items: center; gap: 10px; padding: 8px 0; font-size: 13px; }
    .pipeline__active em { font-style: normal; margin-left: auto; color: var(--bv-text-muted); font-size: 12px; }
    .dot { width: 8px; height: 8px; border-radius: 999px; background: var(--bv-blue); }
    .dot.y { background: var(--bv-yellow); }
  `],
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
}
