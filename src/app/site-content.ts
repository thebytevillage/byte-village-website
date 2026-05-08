/**
 * ============================================================================
 *  BYTE VILLAGE — SITE CONTENT CONFIG
 * ============================================================================
 *
 *  This is THE central place to customize the website. Edit values here and
 *  the corresponding parts of the UI will update.
 *
 *  • Plain text values (titles, body copy, labels) are written as i18n keys
 *    that resolve through the translation files in `src/locale/`.
 *    To change the wording of any string, update the value under the matching
 *    key in `src/locale/strings.en.ts`, `strings.fr.ts`, `strings.sw.ts`.
 *
 *  • Structural data (lists of features, products, badges, nav links,
 *    CTA URLs, color tokens, brand assets) live directly in this file and
 *    can be edited without touching any component.
 *
 *  • To ADD a new product, push a new entry to PRODUCTS.
 *    To ADD a new "Why us" card, push to WHY_CARDS. And so on.
 *
 *  • Brand colors live under BRAND.colors and are wired into CSS via
 *    `--bv-*` custom properties (see styles.css).
 * ============================================================================
 */

import { I18nKey } from './i18n/strings';

// ----------------------------------------------------------------------------
// Brand
// ----------------------------------------------------------------------------
export const BRAND = {
  name: 'Byte Village',
  // Path to the hexagon logo SVG (in src/assets/). Replace this file or
  // change this path to swap the brand mark.
  logoSvgPath: 'assets/logo-mark.svg',

  // Color tokens — also surfaced as CSS variables in styles.css
  colors: {
    blue: '#1433D6',
    blue2: '#2563EB',
    blueDeep: '#0A1F8F',
    navy: '#11103B',
    yellow: '#F8D613',
    yellowDeep: '#D1B200',
    teal: '#14B8A6',
  },

  socials: {
    x: 'https://x.com/bytevillage',
    linkedin: 'https://linkedin.com/company/bytevillage',
    github: 'https://github.com/bytevillage',
  },
};

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------
export interface NavLink {
  /** i18n key, see src/locale/strings.en.ts */
  labelKey: I18nKey;
  /** Anchor on the page, e.g. "#alfasente" */
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { labelKey: 'nav.alfasente', href: '#alfasente' },
  { labelKey: 'nav.bytecloud', href: '#bytecloud' },
  { labelKey: 'nav.developers', href: '#developers' },
  { labelKey: 'nav.bytelab', href: '#bytelab' },
  { labelKey: 'nav.why', href: '#why' },
];

// ----------------------------------------------------------------------------
// Hero
// ----------------------------------------------------------------------------
export const HERO = {
  eyebrowKey: 'hero.eyebrow' as I18nKey,
  // Title is split into 3 segments so we can color/style mid-line:
  // "Building <accent>Africa's</accent> Digital <yellow>Future</yellow>"
  titleSegments: {
    leadKey: 'hero.title.lead' as I18nKey,        // "Building"
    accentKey: 'hero.title.accent' as I18nKey,    // "Africa's"
    midKey: 'hero.title.mid' as I18nKey,          // "Digital"
    highlightKey: 'hero.title.highlight' as I18nKey, // "Future"
  },
  subtitleKey: 'hero.subtitle' as I18nKey,
  primaryCta: { labelKey: 'cta.startBuilding' as I18nKey, href: 'mailto:office@thebytevillage.com' },
  secondaryCta: { labelKey: 'cta.talkToSales' as I18nKey, href: 'mailto:office@thebytevillage.com' },
  metrics: [
    { labelKey: 'hero.metric.uptime.label' as I18nKey,  value: '99.99', unit: '%' },
    { labelKey: 'hero.metric.countries.label' as I18nKey, value: '6', unit: '+' },
    { labelKey: 'hero.metric.payout.label' as I18nKey,  value: '< 8', unit: 's' },
    { labelKey: 'hero.metric.devhub.label' as I18nKey,  value: 'Open', unit: '.' },
  ],
};

// ----------------------------------------------------------------------------
// Trust strip — replace with real <img src="..."> entries when ready.
// ----------------------------------------------------------------------------
export interface TrustLogo {
  /** Either a placeholder text (shown in monospace box) or { imgSrc, alt } */
  placeholderKey?: I18nKey;
  imgSrc?: string;
  alt?: string;
}

export const TRUST_LOGOS: TrustLogo[] = [
  { imgSrc: 'assets/mtn-logo.svg',       alt: 'MTN' },
  { imgSrc: 'assets/airtel-logo.png',    alt: 'Airtel' },
  { imgSrc: 'assets/safetec-logo.jpg',   alt: 'Safetec Security Ltd' },
  { imgSrc: 'assets/alfasente-logo.png', alt: 'Alfasente' },
];

// ----------------------------------------------------------------------------
// Products (Alfasente, ByteCloud, Byte Lab, Developers)
//
//   To add a new product:
//   1. Append a new entry to PRODUCTS below.
//   2. Add the matching i18n keys to src/locale/strings.{en,fr,sw}.ts.
//   3. (Optional) Add a custom visual variant by extending product.component.
// ----------------------------------------------------------------------------
export type ProductVisualKind = 'phone' | 'cloud' | 'code' | 'pipeline';

export interface ProductFeature {
  iconGlyph: string;
  titleKey: I18nKey;
  bodyKey: I18nKey;
}

export interface Product {
  id: string;
  reverse?: boolean;
  comingSoon?: boolean;
  /** Tone for the visual panel */
  visualTone?: 'light' | 'dark' | 'blue';
  visualKind: ProductVisualKind;
  tagGlyph: string;
  tagKey: I18nKey;
  titleKey: I18nKey;
  bodyKey: I18nKey;
  features: ProductFeature[];
  taglineKey?: I18nKey;
  cta: { labelKey: I18nKey; href: string; style: 'primary' | 'yellow' | 'ghost' };
}

export const PRODUCTS: Product[] = [
  {
    id: 'alfasente',
    visualKind: 'phone',
    tagGlyph: '💳',
    tagKey: 'product.alfasente.tag',
    titleKey: 'product.alfasente.title',
    bodyKey: 'product.alfasente.body',
    features: [
      { iconGlyph: '↓',  titleKey: 'product.alfasente.feat.collect.title',  bodyKey: 'product.alfasente.feat.collect.body' },
      { iconGlyph: '↑',  titleKey: 'product.alfasente.feat.payout.title',   bodyKey: 'product.alfasente.feat.payout.body' },
      { iconGlyph: '▢',  titleKey: 'product.alfasente.feat.pos.title',      bodyKey: 'product.alfasente.feat.pos.body' },
      { iconGlyph: '{}', titleKey: 'product.alfasente.feat.api.title',      bodyKey: 'product.alfasente.feat.api.body' },
    ],
    taglineKey: 'product.alfasente.tagline',
    cta: { labelKey: 'product.alfasente.cta', href: 'https://alfasente.com', style: 'primary' },
  },
  {
    id: 'bytecloud',
    reverse: true,
    comingSoon: true,
    visualTone: 'dark',
    visualKind: 'cloud',
    tagGlyph: '☁',
    tagKey: 'product.bytecloud.tag',
    titleKey: 'product.bytecloud.title',
    bodyKey: 'product.bytecloud.body',
    features: [
      { iconGlyph: '▣',  titleKey: 'product.bytecloud.feat.vm.title',     bodyKey: 'product.bytecloud.feat.vm.body' },
      { iconGlyph: '⌬',  titleKey: 'product.bytecloud.feat.net.title',    bodyKey: 'product.bytecloud.feat.net.body' },
      { iconGlyph: '↻',  titleKey: 'product.bytecloud.feat.redun.title',  bodyKey: 'product.bytecloud.feat.redun.body' },
      { iconGlyph: '$',  titleKey: 'product.bytecloud.feat.price.title',  bodyKey: 'product.bytecloud.feat.price.body' },
    ],
    taglineKey: 'product.bytecloud.tagline',
    cta: { labelKey: 'product.bytecloud.cta', href: '#', style: 'yellow' },
  },
  {
    id: 'developers',
    comingSoon: true,
    visualKind: 'code',
    tagGlyph: '{ }',
    tagKey: 'product.dev.tag',
    titleKey: 'product.dev.title',
    bodyKey: 'product.dev.body',
    features: [
      { iconGlyph: '⚡', titleKey: 'product.dev.feat.fast.title',  bodyKey: 'product.dev.feat.fast.body' },
      { iconGlyph: '⌘', titleKey: 'product.dev.feat.idem.title',  bodyKey: 'product.dev.feat.idem.body' },
      { iconGlyph: '◎', titleKey: 'product.dev.feat.tel.title',   bodyKey: 'product.dev.feat.tel.body' },
    ],
    cta: { labelKey: 'product.dev.cta', href: '#', style: 'primary' },
  },
  {
    id: 'bytelab',
    reverse: true,
    visualKind: 'pipeline',
    tagGlyph: '🧠',
    tagKey: 'product.bytelab.tag',
    titleKey: 'product.bytelab.title',
    bodyKey: 'product.bytelab.body',
    features: [
      { iconGlyph: '◐', titleKey: 'product.bytelab.feat.full.title', bodyKey: 'product.bytelab.feat.full.body' },
      { iconGlyph: '⇆', titleKey: 'product.bytelab.feat.api.title',  bodyKey: 'product.bytelab.feat.api.body' },
      { iconGlyph: '∞', titleKey: 'product.bytelab.feat.dev.title',  bodyKey: 'product.bytelab.feat.dev.body' },
      { iconGlyph: '↗', titleKey: 'product.bytelab.feat.life.title', bodyKey: 'product.bytelab.feat.life.body' },
    ],
    taglineKey: 'product.bytelab.tagline',
    cta: { labelKey: 'product.bytelab.cta', href: '#', style: 'primary' },
  },
];

// ----------------------------------------------------------------------------
// Why us
// ----------------------------------------------------------------------------
export interface WhyCard {
  numberLabel: string;
  titleKey: I18nKey;
  bodyKey: I18nKey;
  variant?: 'default' | 'dark';
  cta?: { labelKey: I18nKey; href: string };
}

export const WHY_CARDS: WhyCard[] = [
  { numberLabel: '01 / 05', titleKey: 'why.mobile.title',     bodyKey: 'why.mobile.body' },
  { numberLabel: '02 / 05', titleKey: 'why.compliance.title', bodyKey: 'why.compliance.body' },
  { numberLabel: '03 / 05', titleKey: 'why.uptime.title',     bodyKey: 'why.uptime.body' },
  { numberLabel: '04 / 05', titleKey: 'why.local.title',      bodyKey: 'why.local.body' },
  { numberLabel: '05 / 05', titleKey: 'why.scale.title',      bodyKey: 'why.scale.body' },
  {
    numberLabel: '+',
    titleKey: 'why.story.title',
    bodyKey: 'why.story.body',
    variant: 'dark',
    cta: { labelKey: 'why.story.cta', href: '#' },
  },
];

// ----------------------------------------------------------------------------
// Quote
// ----------------------------------------------------------------------------
export const QUOTE = {
  leadKey: 'quote.lead' as I18nKey,        // "We're not following the future."
  highlightKey: 'quote.highlight' as I18nKey, // "We're building it."
  attrKey: 'quote.attr' as I18nKey,
};

// ----------------------------------------------------------------------------
// Security badges
// ----------------------------------------------------------------------------
export interface SecurityBadge {
  icon: 'shield' | 'lock' | 'globe' | 'check';
  titleKey: I18nKey;
  bodyKey: I18nKey;
}

export const SECURITY_BADGES: SecurityBadge[] = [
  { icon: 'shield', titleKey: 'security.soc.title',   bodyKey: 'security.soc.body' },
  { icon: 'lock',   titleKey: 'security.pci.title',   bodyKey: 'security.pci.body' },
  { icon: 'globe',  titleKey: 'security.data.title',  bodyKey: 'security.data.body' },
  { icon: 'check',  titleKey: 'security.mon.title',   bodyKey: 'security.mon.body' },
];

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------
export interface FooterColumn {
  titleKey: I18nKey;
  links: { labelKey: I18nKey; href: string }[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    titleKey: 'footer.products',
    links: [
      { labelKey: 'nav.alfasente', href: '#alfasente' },
      { labelKey: 'nav.bytecloud', href: '#bytecloud' },
      { labelKey: 'nav.bytelab',   href: '#bytelab' },
      { labelKey: 'footer.devhub', href: '#developers' },
    ],
  },
  {
    titleKey: 'footer.company',
    links: [
      { labelKey: 'footer.about',   href: '#' },
      { labelKey: 'footer.careers', href: '#' },
      { labelKey: 'footer.news',    href: '#' },
      { labelKey: 'footer.contact', href: '#contact' },
    ],
  },
  {
    titleKey: 'footer.resources',
    links: [
      { labelKey: 'footer.docs',    href: '#' },
      { labelKey: 'footer.api',     href: '#' },
      { labelKey: 'footer.status',  href: '#' },
      { labelKey: 'footer.changelog', href: '#' },
    ],
  },
  {
    titleKey: 'footer.legal',
    links: [
      { labelKey: 'footer.privacy',    href: '#' },
      { labelKey: 'footer.terms',      href: '#' },
      { labelKey: 'footer.security',   href: '#security' },
      { labelKey: 'footer.compliance', href: '#' },
    ],
  },
];
