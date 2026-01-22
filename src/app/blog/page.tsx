import Link from 'next/link';
import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/mdx';
import { Navigation, Footer, Container } from '@/components/layout';
import { Tag } from '@/components/ui';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Articles on Quantum Computing, Cybersecurity, Full-Stack Development, and Quantitative Finance.',
};

export default async function BlogPage() {
    // Try to get posts from MDX files, fallback to static data
    let posts = await getAllBlogPosts();

    // If no MDX files exist yet, use static data
    if (posts.length === 0) {
        posts = blogPosts;
    }

    return (
        <>
            <Navigation />

            <main className="pt-32 pb-24">
                <Container>
                    {/* Header */}
                    <div className="mb-16">
                        <p className="font-mono text-[var(--accent)] mb-4">// blog</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--slate-light)] mb-4">
                            Writing & Research
                        </h1>
                        <p className="text-[var(--slate)] max-w-xl">
                            Thoughts on Quantum Computing, Cybersecurity, Quantitative Finance,
                            and everything in between.
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="group relative p-6 rounded-lg bg-[var(--navy-light)] border border-[var(--navy-lighter)]/50 hover:border-[var(--accent)]/30 transition-all duration-300"
                            >
                                <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                                    <span className="sr-only">Read {post.title}</span>
                                </Link>

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    {/* Content */}
                                    <div className="flex-1">
                                        {/* Date */}
                                        <p className="font-mono text-xs text-[var(--accent)] mb-2">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </p>

                                        {/* Title */}
                                        <h2 className="text-xl font-semibold text-[var(--slate-light)] group-hover:text-[var(--accent)] transition-colors mb-2">
                                            {post.title}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-[var(--slate)] text-sm mb-4 line-clamp-2">
                                            {post.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.slice(0, 3).map((tag) => (
                                                <Tag key={tag} variant="muted" size="sm">
                                                    {tag}
                                                </Tag>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Read time */}
                                    <div className="md:text-right">
                                        <span className="font-mono text-xs text-[var(--slate-dark)]">
                                            {post.readTime} read
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Back to home */}
                    <div className="mt-16 text-center">
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
