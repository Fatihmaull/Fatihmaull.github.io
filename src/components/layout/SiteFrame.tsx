'use client';

import Link from 'next/link';
import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';

const socialIcons = {
    github: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
    ),
    linkedin: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    email: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    scholar: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.242 13.769L0 9.225 12 0l12 9.225-5.242 4.544C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
        </svg>
    ),
    whatsapp: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    ),
    instagram: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    ),
};

const socialLinks: { name: string; href: string; label: string; external?: boolean; icon: keyof typeof socialIcons }[] = [
    { name: 'GitHub', href: profile.socials.github, label: 'GitHub (opens in a new tab)', external: true, icon: 'github' },
    { name: 'LinkedIn', href: profile.socials.linkedin, label: 'LinkedIn (opens in a new tab)', external: true, icon: 'linkedin' },
    { name: 'Google Scholar', href: profile.socials.scholar, label: 'Google Scholar (opens in a new tab)', external: true, icon: 'scholar' },
    { name: 'WhatsApp', href: profile.socials.whatsapp, label: 'WhatsApp (opens in a new tab)', external: true, icon: 'whatsapp' },
    { name: 'Instagram', href: profile.socials.instagram, label: 'Instagram (opens in a new tab)', external: true, icon: 'instagram' },
    { name: 'Email', href: profile.socials.email, label: 'Email', icon: 'email' },
];

const navItems = [
    { id: 'about', name: 'About', href: '/#about' },
    { id: 'experience', name: 'Experience', href: '/#experience' },
    { id: 'projects', name: 'Projects', href: '/projects/' },
    { id: 'gallery', name: 'Gallery', href: '/gallery/' },
    { id: 'blog', name: 'Blog', href: '/blog/' },
    { id: 'contact', name: 'Contact', href: '/contact/' },
];

export function SiteFrame({
    active,
    children,
}: {
    active: 'projects' | 'gallery' | 'blog' | 'contact';
    children: React.ReactNode;
}) {
    return (
        <div className="relative">
            <div
                className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header
                        className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
                        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
                    >
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                                <Link href="/">{profile.name}</Link>
                            </h1>
                            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                                Forward Deployed Engineer & Researcher
                            </h2>
                            <p className="mt-4 max-w-xs text-slate-400" style={{ lineHeight: '1.6' }}>
                                Engineer and researcher at the intersection of distributed systems, applied cryptography, and AI.
                            </p>
                            <nav className="nav" aria-label="Primary">
                                <ul className="mt-16 w-max">
                                    {navItems.map((item) => {
                                        const isActive = item.id === active;
                                        return (
                                            <li key={item.id}>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        'group flex items-center py-3',
                                                        isActive ? 'text-slate-200' : 'text-slate-500'
                                                    )}
                                                >
                                                    <span
                                                        className={cn(
                                                            'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none',
                                                            isActive && 'w-16 bg-slate-200'
                                                        )}
                                                    />
                                                    <span className={cn(
                                                        'nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200',
                                                        isActive && 'text-slate-200'
                                                    )}>
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                            {socialLinks.map((item) => (
                                <li key={item.name} className="mr-5 shrink-0">
                                    <Link
                                        href={item.href}
                                        target={item.external ? '_blank' : undefined}
                                        rel={item.external ? 'noreferrer noopener' : undefined}
                                        className="block text-slate-400 hover:text-slate-200 transition"
                                        aria-label={item.label}
                                    >
                                        {socialIcons[item.icon]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </header>

                    <main
                        id="content"
                        className="pt-24 lg:w-1/2 lg:py-24"
                        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
                    >
                        {children}
                        <footer style={{ maxWidth: '28rem', paddingBottom: '4rem', fontSize: '0.875rem', color: 'rgb(100, 116, 139)' }}>
                            <p style={{ lineHeight: '1.625' }}>
                                Loosely designed in{' '}
                                <a href="https://www.figma.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
                                    Figma
                                </a>
                                {' '}and coded in{' '}
                                <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
                                    Visual Studio Code
                                </a>
                                {' '}by yours truly. Built with{' '}
                                <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
                                    Next.js
                                </a>
                                {' '}and{' '}
                                <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
                                    Tailwind CSS
                                </a>
                                , deployed with{' '}
                                <a href="https://pages.github.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
                                    GitHub Pages
                                </a>
                                . Inspired by{' '}
                                <a href="https://brittanychiang.com" target="_blank" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" rel="noreferrer noopener">
                                    Brittany Chiang
                                </a>
                                .
                            </p>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}
