import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from './i18n/i18n.service';
import { TPipe } from './i18n/t.pipe';
import { BRAND } from './site-content';

import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { TrustComponent } from './components/trust.component';
import { ProductComponent } from './components/product.component';
import { WhyComponent } from './components/why.component';
import { QuoteComponent } from './components/quote.component';
import { SecurityComponent } from './components/security.component';
import { ClosingCtaComponent } from './components/closing-cta.component';
import { FooterComponent } from './components/footer.component';
import { PRODUCTS } from './site-content';

@Component({
  selector: 'bv-root',
  standalone: true,
  imports: [
    CommonModule, TPipe,
    HeaderComponent, HeroComponent, TrustComponent, ProductComponent,
    WhyComponent, QuoteComponent, SecurityComponent, ClosingCtaComponent,
    FooterComponent,
  ],
  template: `
    <bv-header />
    <main>
      <bv-hero />
      <bv-trust />
      @for (product of products; track product.id) {
        <bv-product [product]="product" />
      }
      <bv-why />
      <bv-quote />
      <bv-security />
      <bv-closing-cta />
    </main>
    <bv-footer />
  `,
})
export class AppComponent implements OnInit {
  i18n = inject(I18nService);
  products = PRODUCTS;

  ngOnInit() {
    // Apply brand color tokens to CSS variables on the document root.
    // This lets BRAND.colors in site-content.ts drive global CSS.
    const root = document.documentElement;
    root.style.setProperty('--bv-blue', BRAND.colors.blue);
    root.style.setProperty('--bv-blue-2', BRAND.colors.blue2);
    root.style.setProperty('--bv-blue-deep', BRAND.colors.blueDeep);
    root.style.setProperty('--bv-navy', BRAND.colors.navy);
    root.style.setProperty('--bv-yellow', BRAND.colors.yellow);
    root.style.setProperty('--bv-yellow-deep', BRAND.colors.yellowDeep);
    root.style.setProperty('--bv-teal', BRAND.colors.teal);
    document.documentElement.lang = this.i18n.locale();
    // Set i18n-keyed page meta
    document.title = this.i18n.t('page.title');
  }
}
