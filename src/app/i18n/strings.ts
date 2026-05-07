/**
 * ============================================================================
 *  I18N — STRING KEY REGISTRY
 * ============================================================================
 *
 *  This file declares EVERY translatable string key used by the site.
 *
 *  • To CHANGE wording: edit `strings.en.ts`, `strings.fr.ts`, `strings.sw.ts`
 *  • To ADD a new string: add the key here, then add it to all three locale
 *    files. TypeScript will fail the build if any locale is missing the key.
 * ============================================================================
 */

export type I18nKey =
  // page meta
  | 'page.title' | 'page.description'

  // nav
  | 'nav.alfasente' | 'nav.bytecloud' | 'nav.developers' | 'nav.bytelab' | 'nav.why'
  | 'nav.lang.en' | 'nav.lang.fr' | 'nav.lang.sw'

  // ctas (shared)
  | 'cta.startBuilding' | 'cta.talkToSales' | 'cta.contactUs' | 'cta.viewDocs'

  // hero
  | 'hero.eyebrow'
  | 'hero.title.lead' | 'hero.title.accent' | 'hero.title.mid' | 'hero.title.highlight'
  | 'hero.subtitle'
  | 'hero.metric.uptime.label' | 'hero.metric.countries.label'
  | 'hero.metric.payout.label' | 'hero.metric.devhub.label'
  | 'hero.card.volume.title' | 'hero.card.volume.metric' | 'hero.card.volume.delta'
  | 'hero.card.region.title' | 'hero.card.region.status'
  | 'hero.card.signal.title' | 'hero.card.signal.body'

  // trust strip
  | 'trust.title'
  | 'logos.bank' | 'logos.telco' | 'logos.fintech' | 'logos.retail' | 'logos.saas' | 'logos.ngo'

  // products — alfasente
  | 'product.alfasente.tag' | 'product.alfasente.title' | 'product.alfasente.body'
  | 'product.alfasente.feat.collect.title' | 'product.alfasente.feat.collect.body'
  | 'product.alfasente.feat.payout.title'  | 'product.alfasente.feat.payout.body'
  | 'product.alfasente.feat.pos.title'     | 'product.alfasente.feat.pos.body'
  | 'product.alfasente.feat.api.title'     | 'product.alfasente.feat.api.body'
  | 'product.alfasente.tagline' | 'product.alfasente.cta'

  // products — bytecloud
  | 'product.bytecloud.tag' | 'product.bytecloud.title' | 'product.bytecloud.body'
  | 'product.bytecloud.feat.vm.title'    | 'product.bytecloud.feat.vm.body'
  | 'product.bytecloud.feat.net.title'   | 'product.bytecloud.feat.net.body'
  | 'product.bytecloud.feat.redun.title' | 'product.bytecloud.feat.redun.body'
  | 'product.bytecloud.feat.price.title' | 'product.bytecloud.feat.price.body'
  | 'product.bytecloud.tagline' | 'product.bytecloud.cta'
  | 'product.bytecloud.comingSoon'

  // products — developers
  | 'product.dev.tag' | 'product.dev.title' | 'product.dev.body'
  | 'product.dev.feat.fast.title' | 'product.dev.feat.fast.body'
  | 'product.dev.feat.idem.title' | 'product.dev.feat.idem.body'
  | 'product.dev.feat.tel.title'  | 'product.dev.feat.tel.body'
  | 'product.dev.cta'

  // products — bytelab
  | 'product.bytelab.tag' | 'product.bytelab.title' | 'product.bytelab.body'
  | 'product.bytelab.feat.full.title' | 'product.bytelab.feat.full.body'
  | 'product.bytelab.feat.api.title'  | 'product.bytelab.feat.api.body'
  | 'product.bytelab.feat.dev.title'  | 'product.bytelab.feat.dev.body'
  | 'product.bytelab.feat.life.title' | 'product.bytelab.feat.life.body'
  | 'product.bytelab.tagline' | 'product.bytelab.cta'

  // why
  | 'why.eyebrow' | 'why.title' | 'why.subtitle'
  | 'why.mobile.title'     | 'why.mobile.body'
  | 'why.compliance.title' | 'why.compliance.body'
  | 'why.uptime.title'     | 'why.uptime.body'
  | 'why.local.title'      | 'why.local.body'
  | 'why.scale.title'      | 'why.scale.body'
  | 'why.story.title'      | 'why.story.body' | 'why.story.cta'

  // quote
  | 'quote.lead' | 'quote.highlight' | 'quote.attr'

  // security
  | 'security.title' | 'security.subtitle'
  | 'security.soc.title'  | 'security.soc.body'
  | 'security.pci.title'  | 'security.pci.body'
  | 'security.data.title' | 'security.data.body'
  | 'security.mon.title'  | 'security.mon.body'

  // closing cta
  | 'closing.title' | 'closing.subtitle'

  // footer
  | 'footer.tagline'
  | 'footer.products' | 'footer.company' | 'footer.resources' | 'footer.legal'
  | 'footer.devhub'
  | 'footer.about' | 'footer.careers' | 'footer.news' | 'footer.contact'
  | 'footer.docs' | 'footer.api' | 'footer.status' | 'footer.changelog'
  | 'footer.privacy' | 'footer.terms' | 'footer.security' | 'footer.compliance'
  | 'footer.copyright';

export type Locale = 'en' | 'fr' | 'sw';
export type Strings = Record<I18nKey, string>;
