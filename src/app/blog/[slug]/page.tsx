import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getAllBlogSlugs } from '@/lib/mdx';
import { blogPosts, writingSlugs } from '@/lib/data';
import { generateArticleSchema } from '@/lib/metadata';
import { SiteFrame } from '@/components/layout/SiteFrame';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = await getAllBlogSlugs();

    if (slugs.length === 0) {
        return blogPosts.map((post) => ({
            slug: post.slug,
        }));
    }

    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);
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
    const staticPost = blogPosts.find((p) => p.slug === slug);

    if (!post && !staticPost) {
        notFound();
    }

    const postData = post || staticPost;
    const hasContent = post?.content;
    const isWriting = writingSlugs.includes(slug);
    const archiveHref = isWriting ? '/blog/' : '/projects/';
    const archiveLabel = isWriting ? 'Writing & Research' : 'Project Archive';

    return (
        <SiteFrame active={isWriting ? 'blog' : 'projects'}>
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

            <Link
                href={archiveHref}
                className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-300"
            >
                ← {archiveLabel}
            </Link>

            <header className="mb-10 mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {new Date(postData!.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                    <span className="ml-3 normal-case tracking-normal">
                        {postData!.readTime} read
                    </span>
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl" style={{ lineHeight: '1.2' }}>
                    {postData!.title}
                </h2>
                <p className="mt-4 text-slate-400" style={{ lineHeight: '1.625' }}>
                    {postData!.description}
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Topics">
                    {postData!.tags.map((tag) => (
                        <li key={tag}>
                            <span className="experience-tag">{tag}</span>
                        </li>
                    ))}
                </ul>
            </header>

            <article className="post-body">
                {hasContent ? (
                    <MDXRemote source={post!.content} />
                ) : (
                    <p className="text-slate-400">This note is still a draft.</p>
                )}
            </article>

            <div className="mt-16">
                <Link
                    href={archiveHref}
                    className="text-sm font-medium text-slate-400 hover:text-teal-300"
                >
                    ← {archiveLabel}
                </Link>
            </div>
        </SiteFrame>
    );
}
