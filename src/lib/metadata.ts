import type { Metadata } from 'next';
import { profile } from './data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fatihmaulana.dev';

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `${profile.name} | ${profile.title}`,
        template: `%s | ${profile.name}`,
    },
    description: profile.bio,
    keywords: [
        'Fatih Maulana',
        'Quantum Computing',
        'Cybersecurity',
        'Full-Stack Developer',
        'Quantitative Finance',
        'Research',
        'Next.js',
        'TypeScript',
        'Malaysia',
        'Indonesia',
    ],
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: profile.name,
        title: `${profile.name} | ${profile.title}`,
        description: profile.bio,
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: profile.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${profile.name} | ${profile.title}`,
        description: profile.bio,
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add your verification codes here
        // google: 'your-google-verification-code',
    },
};

// JSON-LD Person Schema
export function generatePersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.title,
        email: profile.email,
        url: siteUrl,
        sameAs: [
            profile.socials.github,
            profile.socials.linkedin,
            profile.socials.zenodo,
        ],
        knowsAbout: [
            'Quantum Computing',
            'Cybersecurity',
            'Full-Stack Development',
            'Quantitative Finance',
            'Machine Learning',
        ],
    };
}

// JSON-LD Article Schema Generator
export function generateArticleSchema(article: {
    title: string;
    description: string;
    date: string;
    slug: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        author: {
            '@type': 'Person',
            name: profile.name,
            url: siteUrl,
        },
        publisher: {
            '@type': 'Person',
            name: profile.name,
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/blog/${article.slug}`,
        },
    };
}
