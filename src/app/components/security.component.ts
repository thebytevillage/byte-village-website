import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../i18n/t.pipe';
import { SECURITY_BADGES } from '../site-content';

@Component({
  selector: 'bv-security',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <section class="sec" id="security">
      <div class="sec__head">
        <span class="bv-eyebrow">Security</span>
        <h2 class="bv-h2">{{ 'security.title' | t }}</h2>
        <p class="bv-lead">{{ 'security.subtitle' | t }}</p>
      </div>
      <ul class="sec__grid">
        @for (b of badges; track b.titleKey) {
          <li class="sec__item">
            <div class="sec__icon">
              @switch (b.icon) {
                @case ('shield') {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z"/></svg>
                }
                @case ('lock') {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
                }
                @case ('globe') {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18"/></svg>
                }
                @case ('check') {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>
                }
              }
            </div>
            <h3 class="sec__title">{{ b.titleKey | t }}</h3>
            <p class="sec__body">{{ b.bodyKey | t }}</p>
          </li>
        }
      </ul>
    </section>
  `,
  styles: [`
    .sec { padding: clamp(72px, 9vw, 132px) var(--bv-page-pad); }
    .sec__head { max-width: 720px; margin: 0 auto 56px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 18px; }
    .sec__head .bv-lead { margin: 0; }
    .sec__grid { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
    @media (max-width: 880px) { .sec__grid { grid-template-columns: repeat(2, 1fr); } }
    .sec__item { padding: 28px; border: 1px solid var(--bv-border); border-radius: var(--bv-radius); }
    .sec__icon { width: 44px; height: 44px; border-radius: 12px; background: var(--bv-bg-mid); color: var(--bv-blue); display: inline-flex; align-items: center; justify-content: center; }
    .sec__icon svg { width: 22px; height: 22px; }
    .sec__title { font: 700 17px/1.2 var(--bv-font); margin: 18px 0 8px; }
    .sec__body { font-size: 14px; color: var(--bv-text-muted); margin: 0; }
  `],
})
export class SecurityComponent {
  badges = SECURITY_BADGES;
}
