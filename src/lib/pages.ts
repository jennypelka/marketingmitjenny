// Page registry: title (max 60), description (120-155), lastmod and indexability per page.
// Used by <SEO>, JSON-LD, sitemap.xml and the build check. Update `lastmod` when a page's content changes.
export interface PageMeta {
  path: string;
  name: string;
  title: string;
  description: string;
  lastmod: string;
  noindex?: boolean;
  ogImage: string;
}

// Datenschutz is noindex while only the placeholder is live; remove `noindex` once the generated text is in.
export const pages = {
  home: {
    path: '/',
    name: 'Startseite',
    title: 'Social-Media-Marketing für lokale Unternehmen | Jenny',
    description:
      'Strategisches Social-Media-Marketing für lokale Unternehmen: Content-Erstellung, Community Management und Reporting. Jetzt kostenloses Erstgespräch!',
    lastmod: '2026-10-22',
    ogImage: '/og/start.png',
  },
  leistungen: {
    path: '/leistungen',
    name: 'Leistungen',
    title: 'Social-Media-Leistungen | Marketing mit Jenny',
    description:
      'Social-Media-Strategie, Content-Erstellung, Schnitt und Upload, Community Management und Reporting für lokale Unternehmen. Jetzt Erstgespräch anfragen!',
    lastmod: '2026-10-22',
    ogImage: '/og/leistungen.png',
  },
  ueberUns: {
    path: '/ueber-uns',
    name: 'Über uns',
    title: 'Social-Media-Agentur Geretsried | Marketing mit Jenny',
    description:
      'Professionelle Social-Media-Agentur aus Geretsried. Wir bringen Ihr Social Media auf das nächste Level. Jetzt Kontakt aufnehmen!',
    lastmod: '2026-10-22',
    ogImage: '/og/ueber-uns.png',
  },
  referenzen: {
    path: '/referenzen',
    name: 'Referenzen',
    title: 'Referenzen | Social-Media-Marketing Erfolgsgeschichten',
    description:
      'Erfahren Sie, was unsere Kunden über unsere Social-Media-Marketing-Dienstleistungen sagen. Erfolgsgeschichten von Fahrschule Leirich und mehr.',
    lastmod: '2026-10-22',
    ogImage: '/og/referenzen.png',
  },
  kontakt: {
    path: '/kontakt',
    name: 'Kontakt',
    title: 'Kontakt | Marketing mit Jenny in Geretsried',
    description:
      'Kontakt zu Marketing mit Jenny in Geretsried: Telefon, E-Mail und Adresse. Jetzt ein kostenloses Erstgespräch zu Ihrem Social-Media-Auftritt anfragen!',
    lastmod: '2026-10-22',
    ogImage: '/og/kontakt.png',
  },
  impressum: {
    path: '/impressum',
    name: 'Impressum',
    title: 'Impressum | Marketing mit Jenny',
    description:
      'Impressum von Marketing mit Jenny: Jennifer Pelka, Social Media Agentur, Händelstraße 19, 82538 Geretsried. Kontakt und Pflichtangaben im Überblick.',
    lastmod: '2026-10-22',
    ogImage: '/og/start.png',
  },
  datenschutz: {
    path: '/datenschutz',
    name: 'Datenschutz',
    title: 'Datenschutz | Marketing mit Jenny',
    description:
      'Datenschutzerklärung von Marketing mit Jenny. Der Text wird neu erzeugt und folgt, sobald das Datenschutz-Inventar abgeschlossen ist.',
    lastmod: '2026-10-22',
    noindex: true,
    ogImage: '/og/start.png',
  },
  notFound: {
    path: '/404',
    name: 'Seite nicht gefunden',
    title: 'Seite nicht gefunden | Marketing mit Jenny',
    description:
      'Diese Seite gibt es nicht (mehr). Hier geht es zurück zur Startseite, zu den Leistungen, zu Referenzen oder zum Kontakt von Marketing mit Jenny.',
    lastmod: '2026-10-22',
    noindex: true,
    ogImage: '/og/start.png',
  },
} satisfies Record<string, PageMeta>;

export type PageKey = keyof typeof pages;
