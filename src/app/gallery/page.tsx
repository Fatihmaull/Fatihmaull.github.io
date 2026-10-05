import Link from 'next/link';
import { Metadata } from 'next';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { projects, galleryArchive } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Selected projects, photos, and activity from the archive.',
};

const GitHubIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const FolderIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
);

const projectImages: Record<number, string> = {
    1: '/images/previews/evergreen.webp',
    2: '/images/previews/halalchain.webp',
    3: '/images/previews/ares.webp',
    4: '/images/previews/parity.webp',
    5: '/images/previews/focu.webp',
    18: '/images/game.png',
    22: '/images/djikstra.png',
    23: '/images/iot.png',
    24: '/images/javaoop.png',
    26: '/images/lokalii.png',
    27: '/images/php.png',
    28: '/images/GAME PSI (4).png',
};

const galleryItems: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
    featured?: boolean;
}[] = [
    ...projects.map((project) => ({
        id: project.id,
        title: project.title,
        description: project.description,
        tags: project.tags,
        link: project.link,
        featured: project.featured,
        image: projectImages[project.id] || '/images/work.jpg',
    })),
    ...galleryArchive.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        tags: item.tags,
        link: item.link,
        image: item.image,
    })),
];

export default function GalleryPage() {
    return (
        <SiteFrame active="gallery">
            <div className="mb-12">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                    Gallery
                </h2>
                <p className="mt-4 max-w-md text-slate-400" style={{ lineHeight: '1.625' }}>
                    Selected projects, photos, and activity.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                {galleryItems.map((project) => {
                    const backgroundImage = encodeURI(project.image);
                    const hasLink = Boolean(project.link && project.link !== '#');

                    return (
                        <article
                            key={project.id}
                            className="group relative flex min-h-72 flex-col overflow-hidden rounded-lg border border-slate-700/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-teal-300/30"
                            style={{
                                backgroundImage: `url("${backgroundImage}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: `linear-gradient(
                                        to bottom,
                                        rgba(30, 41, 59, 0.95) 10%,
                                        rgba(30, 41, 59, 0.85) 25%,
                                        rgba(30, 41, 59, 0.3) 45%,
                                        rgba(30, 41, 59, 0.3) 55%,
                                        rgba(30, 41, 59, 0.85) 78%,
                                        rgba(30, 41, 59, 0.95) 80%
                                    )`,
                                }}
                            />

                            <div className="relative z-10 flex h-full flex-col">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="text-teal-300">
                                        <FolderIcon />
                                    </span>

                                    {hasLink && (
                                        <div className="flex items-center gap-4">
                                            <Link
                                                href={project.link}
                                                className="text-slate-400 hover:text-teal-300"
                                                aria-label="View on GitHub"
                                            >
                                                <GitHubIcon />
                                            </Link>
                                            <Link
                                                href={project.link}
                                                className="text-slate-400 hover:text-teal-300"
                                                aria-label="Open project"
                                            >
                                                <ExternalLinkIcon />
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <h3 className="mb-3 text-2xl font-bold text-slate-200 group-hover:text-teal-300">
                                    <Link href={project.link || '#'}>
                                        {project.title}
                                    </Link>
                                </h3>

                                <p className="mb-6 flex-grow text-base leading-relaxed text-slate-400">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-teal-300/10 px-2.5 py-1 font-mono text-xs text-teal-300/90"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.featured && (
                                <div className="absolute right-0 top-0 z-20 rounded-bl-lg rounded-tr-lg bg-teal-300 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
                                    Featured
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </SiteFrame>
    );
}
