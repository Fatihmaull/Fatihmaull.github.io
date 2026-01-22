import type { MetadataRoute } from 'next';

// Force static generation for static export
export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fatihmaull.github.io';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/static/'],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
