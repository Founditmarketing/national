import { Helmet } from 'react-helmet-async';

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
}

const DEFAULT_IMAGE = 'https://www.nattireauto.com/brands/national_automotive_group_logo.png';

export default function PageSEO({ title, description, canonical, ogImage, noIndex }: PageSEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="National Tire & Auto" />
      <meta property="og:image" content={ogImage ?? DEFAULT_IMAGE} />
    </Helmet>
  );
}
