import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    readTime: string;
    content: string;
}

export interface BlogPostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    readTime: string;
}

/**
 * Get all blog posts metadata (for listing)
 */
export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
    // Check if directory exists
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR);

    const posts = files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => {
            const filePath = path.join(BLOG_DIR, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                slug: file.replace('.mdx', ''),
                title: data.title || 'Untitled',
                description: data.description || '',
                date: data.date || new Date().toISOString(),
                tags: data.tags || [],
                readTime: data.readTime || '5 min',
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        tags: data.tags || [],
        readTime: data.readTime || '5 min',
        content,
    };
}

/**
 * Get all blog post slugs (for static generation)
 */
export async function getAllBlogSlugs(): Promise<string[]> {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR);

    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace('.mdx', ''));
}
