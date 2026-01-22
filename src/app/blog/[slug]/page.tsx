import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getAllBlogSlugs } from '@/lib/mdx';
import { blogPosts } from '@/lib/data';
import { generateArticleSchema } from '@/lib/metadata';
import { Navigation, Footer, Container } from '@/components/layout';
import { Tag } from '@/components/ui';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
    const slugs = await getAllBlogSlugs();

    // If no MDX files, use static data
    if (slugs.length === 0) {
        return blogPosts.map((post) => ({
            slug: post.slug,
        }));
    }

    return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    // Fallback to static data if no MDX file
    const staticPost = blogPosts.find((p) => p.slug === slug);
    const postData = post || staticPost;

    if (!postData) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: postData.title,
        description: postData.description,
        openGraph: {
            title: postData.title,
            description: postData.description,
            type: 'article',
            publishedTime: postData.date,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    // Try static data if no MDX file
    const staticPost = blogPosts.find((p) => p.slug === slug);

    if (!post && !staticPost) {
        notFound();
    }

    const postData = post || staticPost;
    const hasContent = post?.content;

    return (
        <>
            <Navigation />

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateArticleSchema({
                        title: postData!.title,
                        description: postData!.description,
                        date: postData!.date,
                        slug: slug,
                    })),
                }}
            />

            <main className="pt-32 pb-24">
                <Container size="narrow">
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 font-mono text-sm text-[var(--accent)] hover:underline underline-offset-4 mb-8"
                    >
                        ← All Posts
                    </Link>

                    {/* Article Header */}
                    <header className="mb-12">
                        {/* Date */}
                        <p className="font-mono text-sm text-[var(--accent)] mb-4">
                            {new Date(postData!.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                            <span className="text-[var(--slate-dark)] ml-4">
                                · {postData!.readTime} read
                            </span>
                        </p>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--slate-light)] mb-6 leading-tight">
                            {postData!.title}
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-[var(--slate)] mb-6">
                            {postData!.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {postData!.tags.map((tag) => (
                                <Tag key={tag} variant="default" size="md">
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    </header>

                    {/* Article Content */}
                    <article className="prose prose-invert prose-lg max-w-none">
                        {hasContent ? (
                            <MDXRemote source={post!.content} />
                        ) : (
                            <div className="bg-[var(--navy-light)] rounded-lg p-8 text-center">
                                <p className="text-[var(--slate)] mb-4">
                                    This article is coming soon. Check back later for the full content!
                                </p>
                                <p className="font-mono text-sm text-[var(--slate-dark)]">
                                    Status: Draft
                                </p>
                            </div>
                        )}
                    </article>

                    {/* Footer navigation */}
                    <div className="mt-16 pt-8 border-t border-[var(--navy-lighter)]">
                        <Link
                            href="/blog"
                            className="font-mono text-sm text-[var(--accent)] hover:underline underline-offset-4"
                        >
                            ← Back to all posts
                        </Link>
                    </div>
                </Container>
            </main>

            <Footer />
        </>
    );
}
