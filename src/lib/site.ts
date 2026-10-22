// Single source for name, address and phone (NAP). Must match content/impressum.md and content/kontakt.md.
export const site = {
  name: 'Marketing mit Jenny',
  brand: 'marketingmitjenny',
  // PUBLIC_SITE_URL overrides the live domain for preview builds (see docs/anleitung-live-gang.md)
  url: (import.meta.env.PUBLIC_SITE_URL || 'https://marketingmitjenny.de').replace(/\/$/, ''),
  tagline: 'Strategisches Social-Media-Marketing für lokale Unternehmen',
  person: 'Jennifer Pelka',
  address: {
    street: 'Händelstraße 19',
    zip: '82538',
    city: 'Geretsried',
    country: 'DE',
  },
  phone: '+49 155 63469509',
  email: 'info@marketingmitjenny.de',
  instagram: 'https://www.instagram.com/marketingmitjenny/',
  linkedin: 'https://www.linkedin.com/in/jennifer-pelka-a216b6237/',
} as const;

export const nav = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Referenzen', href: '/referenzen' },
] as const;
