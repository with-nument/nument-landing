import NextHead from 'next/head';
import PropTypes from 'prop-types';
import contact from '@src/constants/contact';
import { useRouter } from 'next/router';

export const SITE_URL = 'https://nument.in';
const OG_IMAGE = `${SITE_URL}/og.png`;
const ORG_ID = `${SITE_URL}/#organization`;

// Site-wide structured data: the studio as an organisation and a local professional service, plus the website.
const baseGraph = () => [
  {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: 'Nument',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/android-chrome-512x512.png`, width: 512, height: 512 },
    image: OG_IMAGE,
    description: 'Nument is an AI and software studio in Gurugram that designs, builds and launches websites, apps, AI assistants and automation for founders and growing businesses.',
    email: contact.email,
    priceRange: '₹50,000 to ₹5,00,000',
    currenciesAccepted: 'INR',
    address: { '@type': 'PostalAddress', addressLocality: 'Gurugram', addressRegion: 'Haryana', addressCountry: 'IN' },
    areaServed: { '@type': 'Country', name: 'India' },
    knowsAbout: ['Website development', 'Mobile app development', 'AI assistants', 'WhatsApp automation', 'Voice AI', 'Business automation'],
    ...(contact.linkedin ? { sameAs: [contact.linkedin] } : {}),
  },
  {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Nument',
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  },
];

const breadcrumbGraph = (crumbs) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${c.path === '/' ? '' : c.path}`,
  })),
});

// FAQ items ({ q, a }) as schema.org FAQPage.
export const faqSchema = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

// A service we sell, with its starting price in rupees.
export const serviceSchema = ({ name, description, url, minPrice }) => ({
  '@type': 'Service',
  name,
  description,
  url: `${SITE_URL}${url}`,
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'India' },
  ...(minPrice ? { offers: { '@type': 'Offer', priceCurrency: 'INR', priceSpecification: { '@type': 'PriceSpecification', minPrice, priceCurrency: 'INR' } } } : {}),
});

// Turns "₹1.5L" / "₹50K" into a number of rupees for structured data.
export const rupees = (label) => {
  const n = parseFloat(label.replace(/[^\d.]/g, ''));
  if (/L/i.test(label)) return Math.round(n * 100000);
  if (/K/i.test(label)) return Math.round(n * 1000);
  return n;
};

function CustomHead({ title, description, breadcrumbs, schema, noindex }) {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const pageUrl = `${SITE_URL}${path === '/' ? '' : path}`;
  const index = process.env.NODE_ENV !== 'development' && !noindex;
  const graph = [...baseGraph(), ...(breadcrumbs ? [breadcrumbGraph(breadcrumbs)] : []), ...schema];

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta name="robots" content={index ? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex, nofollow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Nument" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="IN-HR" />
      <meta name="geo.placename" content="Gurugram" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nument" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nument: websites, apps and AI that grow your business" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2E2F9E" />
      <meta name="msapplication-TileColor" content="#2E2F9E" />
      <meta name="theme-color" content="#fcfcfc" />

      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }} />
    </NextHead>
  );
}

CustomHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })),
  schema: PropTypes.arrayOf(PropTypes.shape({})),
  noindex: PropTypes.bool,
};

CustomHead.defaultProps = {
  breadcrumbs: null,
  schema: [],
  noindex: false,
};

export default CustomHead;
