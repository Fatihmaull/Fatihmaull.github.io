import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data';

// Force static generation for static export
export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fatihmaulana.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // Blog posts
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}
