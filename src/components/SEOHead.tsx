import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    article?: {
        author?: string;
        publishedTime?: string;
        modifiedTime?: string;
        tags?: string[];
    };
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = 'Verrazano Roofing';
const DEFAULT_DESCRIPTION = 'Verrazano Roofing provides elite commercial roofing services, specializing in premium performance coatings and comprehensive structural repairs in Brooklyn, NY.';
const DEFAULT_IMAGE = 'https://picsum.photos/seed/verrazano-og/1200/630';
const BASE_URL = 'https://verrazanoroofing.com';

export function SEOHead({
    title,
    description = DEFAULT_DESCRIPTION,
    image = DEFAULT_IMAGE,
    url = '',
    type = 'website',
    article,
    jsonLd,
}: SEOProps) {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Premium Commercial Roofing Solutions`;
    const canonicalUrl = `${BASE_URL}${url}`;

    // Normalize jsonLd to an array
    const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Article-specific meta */}
            {article?.author && <meta property="article:author" content={article.author} />}
            {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
            {article?.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
            {article?.tags?.map((tag, i) => (
                <meta key={i} property="article:tag" content={tag} />
            ))}

            {/* JSON-LD Structured Data */}
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}
