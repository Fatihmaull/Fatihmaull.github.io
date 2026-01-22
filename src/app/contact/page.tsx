'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation, Footer, Container } from '@/components/layout';
import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';

// Social Media Icons
const socialIcons = {
    github: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
    ),
    linkedin: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    instagram: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
    ),
    twitter: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    medium: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
    ),
    reddit: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-2.597a1.25 1.25 0 0 1 0-1.768l2.597-2.597a1.25 1.25 0 0 1 1.768 0l2.597 2.597a1.25 1.25 0 0 1-.001 1.768zm-10.02 0a1.25 1.25 0 0 1-.001-1.768l2.597-2.597a1.25 1.25 0 0 1 1.768 0l2.597 2.597a1.25 1.25 0 0 1-.001 1.768l-2.597 2.597a1.25 1.25 0 0 1-1.768 0zM12 5.118a6.855 6.855 0 0 0-6.844 6.844 6.855 6.855 0 0 0 6.844 6.844 6.855 6.855 0 0 0 6.844-6.844A6.855 6.855 0 0 0 12 5.118zm0 11.667a4.823 4.823 0 0 1-4.823-4.823 4.823 4.823 0 0 1 4.823-4.823 4.823 4.823 0 0 1 4.823 4.823 4.823 4.823 0 0 1-4.823 4.823zm-3.24-5.661a.937.937 0 1 1 1.874 0 .937.937 0 0 1-1.874 0zm6.48 0a.937.937 0 1 1 1.874 0 .937.937 0 0 1-1.874 0z" />
        </svg>
    ),
    zenodo: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 01-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
        </svg>
    ),
    whatsapp: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    ),
    email: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
};

interface SocialLink {
    name: string;
    url: string;
    icon: keyof typeof socialIcons;
    label: string;
}

const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: profile.socials.github, icon: 'github', label: 'GitHub Profile' },
    { name: 'LinkedIn', url: profile.socials.linkedin, icon: 'linkedin', label: 'LinkedIn Profile' },
    { name: 'Instagram', url: profile.socials.instagram, icon: 'instagram', label: 'Instagram Profile' },
    { name: 'X (Twitter)', url: profile.socials.twitter, icon: 'twitter', label: 'X (Twitter) Profile' },
    { name: 'Medium', url: profile.socials.medium, icon: 'medium', label: 'Medium Profile' },
    { name: 'Reddit', url: profile.socials.reddit, icon: 'reddit', label: 'Reddit Profile' },
    { name: 'Zenodo', url: profile.socials.zenodo, icon: 'zenodo', label: 'Zenodo Research Profile' },
    { name: 'WhatsApp', url: profile.socials.whatsapp, icon: 'whatsapp', label: 'WhatsApp Chat' },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Create mailto link with form data
        const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:${profile.email}?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form after a delay
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
            setSubmitStatus('success');
        }, 1000);
    };

    return (
        <>
            <Navigation />

            <main className="pt-32 pb-24 min-h-screen">
                <Container size="narrow">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <p className="font-mono text-[var(--accent)] mb-4">// contact</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--slate-light)] mb-4">
                            Get In Touch
                        </h1>
                        <p className="text-[var(--slate)] max-w-xl mx-auto leading-relaxed">
                            I&apos;m always open to discussing new opportunities, projects, or just having a chat.
                            Feel free to reach out through any of the platforms below or use the contact form.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column - Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-semibold text-[var(--slate-light)] mb-6">
                                Connect With Me
                            </h2>
                            <p className="text-[var(--slate)] mb-8 leading-relaxed">
                                You can find me on these platforms. I&apos;m most active on LinkedIn and GitHub.
                            </p>

                            {/* Social Links Grid */}
                            <div className="space-y-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                        className={cn(
                                            'group flex items-center gap-4 p-4 rounded-lg',
                                            'bg-[var(--navy-light)] border border-[var(--navy-lighter)]/50',
                                            'hover:border-[var(--accent)]/30 hover:bg-[var(--navy-lighter)]',
                                            'transition-all duration-300'
                                        )}
                                        aria-label={social.label}
                                    >
                                        <span className="text-[var(--accent)] group-hover:scale-110 transition-transform">
                                            {socialIcons[social.icon]}
                                        </span>
                                        <span className="text-[var(--slate-light)] group-hover:text-[var(--accent)] transition-colors font-medium">
                                            {social.name}
                                        </span>
                                        <svg
                                            className="w-4 h-4 ml-auto text-[var(--slate-dark)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Contact Info */}
                            <div className="mt-12 p-6 rounded-lg bg-[var(--navy-light)] border border-[var(--navy-lighter)]/50 w-fit">
                                <h3 className="text-lg font-semibold text-[var(--slate-light)] mb-4">
                                    Direct Contact
                                </h3>
                                <div className="space-y-3">
                                    <a
                                        href={`mailto:${profile.email}`}
                                        className="flex items-center gap-3 text-[var(--slate)] hover:text-[var(--accent)] transition-colors break-all"
                                    >
                                        <span className="text-[var(--accent)] flex-shrink-0">{socialIcons.email}</span>
                                        <span className="font-mono text-sm break-all">{profile.email}</span>
                                    </a>
                                    <a
                                        href={profile.socials.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-[var(--slate)] hover:text-[var(--accent)] transition-colors"
                                    >
                                        <span className="text-[var(--accent)] flex-shrink-0">{socialIcons.whatsapp}</span>
                                        <span className="font-mono text-sm">{profile.phone}</span>
                                    </a>
                                    <div className="flex items-center gap-3 text-[var(--slate-dark)]">
                                        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="font-mono text-sm">{profile.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-semibold text-[var(--slate-light)] mb-6">
                                Send a Message
                            </h2>
                            <p className="text-[var(--slate)] mb-8 leading-relaxed">
                                Prefer to send an email? Fill out the form below and I&apos;ll get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-[var(--slate-light)] mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={cn(
                                            'w-full px-4 py-3 rounded-lg',
                                            'bg-[var(--navy-light)] border border-[var(--navy-lighter)]/50',
                                            'text-[var(--slate-light)] placeholder-[var(--slate-dark)]',
                                            'focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]',
                                            'transition-all duration-300'
                                        )}
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-[var(--slate-light)] mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={cn(
                                            'w-full px-4 py-3 rounded-lg',
                                            'bg-[var(--navy-light)] border border-[var(--navy-lighter)]/50',
                                            'text-[var(--slate-light)] placeholder-[var(--slate-dark)]',
                                            'focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]',
                                            'transition-all duration-300'
                                        )}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-[var(--slate-light)] mb-2"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={cn(
                                            'w-full px-4 py-3 rounded-lg',
                                            'bg-[var(--navy-light)] border border-[var(--navy-lighter)]/50',
                                            'text-[var(--slate-light)] placeholder-[var(--slate-dark)]',
                                            'focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]',
                                            'transition-all duration-300'
                                        )}
                                        placeholder="What's this about?"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-[var(--slate-light)] mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className={cn(
                                            'w-full px-4 py-3 rounded-lg resize-none',
                                            'bg-[var(--navy-light)] border border-[var(--navy-lighter)]/50',
                                            'text-[var(--slate-light)] placeholder-[var(--slate-dark)]',
                                            'focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]',
                                            'transition-all duration-300'
                                        )}
                                        placeholder="Your message here..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={cn(
                                        'w-full px-6 py-3 rounded-lg font-mono text-sm font-semibold',
                                        'bg-[var(--accent)] text-[var(--navy)]',
                                        'hover:bg-[var(--accent)]/90',
                                        'focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]',
                                        'disabled:opacity-50 disabled:cursor-not-allowed',
                                        'transition-all duration-300'
                                    )}
                                >
                                    {isSubmitting ? 'Opening Email...' : 'Send Message'}
                                </button>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-lg bg-[var(--accent-tint)] border border-[var(--accent)]/30"
                                    >
                                        <p className="text-sm text-[var(--accent)]">
                                            ✓ Your email client should open shortly. If it doesn&apos;t, please send an email to{' '}
                                            <a href={`mailto:${profile.email}`} className="underline">
                                                {profile.email}
                                            </a>
                                        </p>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
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

