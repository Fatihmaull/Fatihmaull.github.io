import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/mdx';

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });
}

export function PostList({ posts }: { posts: BlogPostMeta[] }) {
    return (
        <ul className="group/list">
            {posts.map((post) => (
                <li key={post.slug} style={{ marginBottom: '3rem' }}>
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50" />
                        <header
                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                            aria-label={post.date}
                        >
                            {formatDate(post.date)}
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3>
                                <Link
                                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                    href={`/blog/${post.slug}/`}
                                >
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                    <span>
                                        {post.title}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                        >
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </Link>
                            </h3>
                            <p className="mt-2 text-sm" style={{ lineHeight: '1.625' }}>
                                {post.description}
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Topics">
                                {post.tags.slice(0, 4).map((tag) => (
                                    <li key={tag}>
                                        <span className="experience-tag">{tag}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
