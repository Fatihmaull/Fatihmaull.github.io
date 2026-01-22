
import Link from 'next/link';
import { Metadata } from 'next';
import { Navigation, Footer, Container } from '@/components/layout';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
    title: 'Gallery - Project Archive',
    description: 'A collection of projects, experiments, and research work.',
};

// Social icons (reused from page.tsx for consistency)
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

export default function GalleryPage() {
    return (
        <>
            <Navigation />

            <main className="pt-32 pb-24 min-h-screen">
                <Container size="wide">
                    {/* Header */}
                    <div className="mb-16">
                        <p className="font-mono text-[var(--accent)] mb-4">// gallery</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--slate-light)] mb-4">
                            Project Archive
                        </h1>
                        <p className="text-[var(--slate)] max-w-xl text-lg leading-relaxed">
                            A selected collection of my work in quantum computing research,
                            software engineering, and system security.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                        {projects.map((project, index) => {
                            // Map project sizes to grid classes
                            const sizeClasses = {
                                large: 'md:col-span-2 md:row-span-2',
                                vertical: 'md:row-span-2',
                                wide: 'md:col-span-2',
                                square: '',
                            };

                            return (
                                <article
                                    key={project.id}
                                    className={cn(
                                        'group relative flex flex-col',
                                        'bg-[var(--navy-light)] rounded-lg p-8',
                                        'border border-[var(--navy-lighter)]/50',
                                        'hover:border-[var(--accent)]/30 hover:-translate-y-2',
                                        'transition-all duration-300 ease-out',
                                        'hover:shadow-xl hover:shadow-[var(--shadow-color)]',
                                        sizeClasses[project.size as keyof typeof sizeClasses]
                                    )}
                                >
                                    {/* Top row - folder and links */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[var(--accent)]">
                                            <FolderIcon />
                                        </span>

                                        <div className="flex items-center gap-4">
                                            <Link
                                                href={project.link || '#'}
                                                className="text-[var(--slate)] hover:text-[var(--accent)] transition-colors"
                                                aria-label="View on GitHub"
                                            >
                                                <GitHubIcon />
                                            </Link>
                                            <Link
                                                href={project.link || '#'}
                                                className="text-[var(--slate)] hover:text-[var(--accent)] transition-colors"
                                                aria-label="Read Blog Post"
                                            >
                                                <ExternalLinkIcon />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Project Title */}
                                    <h3 className="text-2xl font-bold text-[var(--slate-light)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                                        <Link href={project.link || '#'}>
                                            {project.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[var(--slate)] text-base leading-relaxed flex-grow mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-mono text-[var(--accent)]/90 bg-[var(--accent)]/10 px-2.5 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Featured badge for large cards */}
                                    {project.featured && (
                                        <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--accent)] text-[var(--navy)] font-mono text-xs font-bold uppercase tracking-wider rounded-bl-lg rounded-tr-lg">
                                            Featured
                                        </div>
                                    )}
                                </article>
                            );
                        })}
                    </div>

                    {/* Back to home */}
                    <div className="mt-20 text-center">
                        <Link
                            href="/"
                            className="font-mono text-sm text-[var(--accent)] hover:underline underline-offset-4"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </Container>
            </main>

            <Footer />
        </>
    );
}
