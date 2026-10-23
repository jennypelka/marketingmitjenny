import { site } from './site';
import { leistungen } from './leistungen';
import { faq } from './faq';
import { pages, type PageKey } from './pages';

const id = {
  org: `${site.url}/#organization`,
  web: `${site.url}/#website`,
  person: `${site.url}/#jennifer-pelka`,
};
const abs = (path: string) => (path === '/' ? `${site.url}/` : `${site.url}${path}`);

// Only data that is visible on the site (name, address, phone, e-mail, social links, service texts).
export function buildSchema(key: PageKey) {
  const page = pages[key];
  const url = abs(page.path);
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'ProfessionalService',
      '@id': id.org,
      name: site.name,
      url: site.url,
      logo: { '@type': 'ImageObject', url: `${site.url}/logo.png`, width: 494, height: 350 },
      image: `${site.url}/jennifer-pelka.jpg`,
      description: `${site.tagline}.`,
      telephone: site.phone,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        postalCode: site.address.zip,
        addressLocality: site.address.city,
        addressCountry: site.address.country,
      },
      // TODO: Einzugsgebiet von Jenny, bis dahin nur der belegte Standort
      areaServed: { '@type': 'City', name: site.address.city },
      founder: { '@id': id.person },
      sameAs: [site.instagram, site.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': id.web,
      url: site.url,
      name: site.name,
      inLanguage: 'de-DE',
      publisher: { '@id': id.org },
    },
    {
      '@type': 'Person',
      '@id': id.person,
      name: site.person,
      jobTitle: 'Gründerin',
      image: `${site.url}/jennifer-pelka.jpg`,
      worksFor: { '@id': id.org },
      sameAs: [site.linkedin],
    },
    {
      '@type': key === 'ueberUns' ? 'AboutPage' : key === 'kontakt' ? 'ContactPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: 'de-DE',
      isPartOf: { '@id': id.web },
      about: { '@id': id.org },
      dateModified: page.lastmod,
      ...(key !== 'home' && key !== 'notFound' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    },
  ];

  if (key !== 'home' && key !== 'notFound') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Start', item: abs('/') },
        { '@type': 'ListItem', position: 2, name: page.name, item: url },
      ],
    });
  }

  if (key === 'leistungen') {
    for (const l of leistungen) {
      graph.push({
        '@type': 'Service',
        name: l.title,
        description: l.text,
        serviceType: l.title,
        provider: { '@id': id.org },
        url,
      });
    }
  }

  if (key === 'leistungen') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
