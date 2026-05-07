# Byte Village — Angular Marketing Site

A fully-customizable Angular 17 marketing website for Byte Village, with EN / FR / SW (Swahili) translations, a centralized content config, and per-section components.

## Quick start

```bash
cd angular-app
npm install
npm start                  # English (default), http://localhost:4200
npm run start:fr           # French
npm run start:sw           # Swahili
npm run build:all          # Build all three locales to dist/byte-village/{en,fr,sw}/
```

Requires Node 18+ and Angular CLI 17 (`npm i -g @angular/cli@17`).

## Where to customize what

Everything you'll likely want to edit lives in two places:

### 1. `src/app/site-content.ts` — structure, links, brand assets

This is the **central config**. Edit values here to:

- **Rebrand colors**: `BRAND.colors` (blue, yellow, navy, etc.) — these are wired into CSS custom properties at runtime.
- **Swap the logo**: replace `src/assets/logo-mark.svg` (or change `BRAND.logoSvgPath`).
- **Change navigation**: edit `NAV_LINKS`.
- **Edit hero metrics**: `HERO.metrics`.
- **Add/remove products**: push to or remove from `PRODUCTS` (each entry references i18n keys for copy).
- **Add/remove "Why us" cards**: `WHY_CARDS`.
- **Update trust logos**: `TRUST_LOGOS` — supply `imgSrc` for real images, or keep `placeholderKey` for the dashed boxes.
- **Update security badges**: `SECURITY_BADGES`.
- **Update footer columns**: `FOOTER_COLUMNS`.
- **Change CTA URLs**: `cta.href` on each product / closing CTA / footer link.

### 2. `src/app/i18n/strings.{en,fr,sw}.ts` — wording in each language

Every visible string is keyed in `src/app/i18n/strings.ts` and translated in the three locale files. To change wording, edit the value next to the matching key in **all three** files. TypeScript will fail the build if any locale is missing a key (the `Strings` type is exhaustive over `I18nKey`).

To **add a new string**:

1. Add the key to the `I18nKey` union in `strings.ts`.
2. Add the value to `EN`, `FR`, and `SW` in the three locale files.
3. Use `'my.new.key' | t` in any template, or `i18n.t('my.new.key')` in code.

The locale switcher in the header is wired to `I18nService.setLocale()` and persists the choice to `localStorage`.

## Project structure

```
angular-app/
├── src/
│   ├── index.html, main.ts, styles.css
│   ├── assets/logo-mark.svg
│   └── app/
│       ├── app.component.ts          ← root, applies brand color tokens
│       ├── app.config.ts
│       ├── site-content.ts           ← ★ central content config
│       ├── i18n/
│       │   ├── strings.ts            ← key registry (type-safe)
│       │   ├── strings.en.ts
│       │   ├── strings.fr.ts
│       │   ├── strings.sw.ts
│       │   ├── i18n.service.ts       ← locale signal + setLocale()
│       │   └── t.pipe.ts             ← `| t` template pipe
│       └── components/
│           ├── header.component.ts
│           ├── hero.component.ts
│           ├── trust.component.ts
│           ├── product.component.ts  ← renders any product (Alfasente, ByteCloud, etc.)
│           ├── why.component.ts
│           ├── quote.component.ts
│           ├── security.component.ts
│           ├── closing-cta.component.ts
│           └── footer.component.ts
```

## Adding a new product section

1. Append an entry to `PRODUCTS` in `site-content.ts`. Choose a `visualKind` from `'phone' | 'cloud' | 'code' | 'pipeline'` (or extend `product.component.ts` with a new `<ng-template>` for a custom visual).
2. Add the corresponding i18n keys (`product.<id>.title`, `.body`, feature titles/bodies, CTA label) to `I18nKey` and translate in all three locale files.
3. The new section auto-renders in `app.component.ts` via `@for (product of products; ...)`.

## Adding a new locale (e.g. Arabic)

1. Add the locale tag to the `Locale` union in `strings.ts`.
2. Create `strings.ar.ts` exporting an `AR: Strings` dictionary with all keys translated.
3. Register it in `i18n.service.ts` (`DICTS`) and the header's `locales` array.
4. (Optional) Add an `ar` configuration in `angular.json` if you want a separate compiled bundle.

## Notes

- All components are **standalone** (no NgModules) using Angular 17's control-flow syntax (`@if`, `@for`, `@switch`).
- Brand colors are exposed as CSS custom properties (`--bv-blue`, `--bv-yellow`, `--bv-navy`, …) so component CSS stays themable. They are seeded from `BRAND.colors` on `AppComponent.ngOnInit`.
- Logos in the trust strip and footer placeholder are dashed boxes — drop in real `<img>`s by setting `imgSrc` on `TRUST_LOGOS` entries.
- The site is a single long page; nav links are anchor jumps. Convert to a router-based multi-page app by registering routes in `app.config.ts`.
