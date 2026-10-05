import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/mdx';
import { writingSlugs } from '@/lib/data';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { PostList } from '@/components/layout/PostList';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Build notes and project write-ups: systems, hardware, security, and software.',
};

export default async function ProjectsPage() {
    const posts = (await getAllBlogPosts()).filter(
        (post) => !writingSlugs.includes(post.slug)
    );

    return (
        <SiteFrame active="projects">
            <div className="mb-12">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                    Project Archive
                </h2>
                <p className="mt-4 max-w-md text-slate-400" style={{ lineHeight: '1.625' }}>
                    Build notes from systems, hardware, and software projects. Each note still lives at its original address.
                </p>
            </div>
            <PostList posts={posts} />
        </SiteFrame>
    );
}
