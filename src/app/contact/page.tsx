'use client';

import { useState } from 'react';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';

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

        const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
            setSubmitStatus('success');
        }, 1000);
    };

    const fieldClass = cn(
        'w-full rounded-lg px-4 py-3',
        'border border-slate-700/50 bg-slate-800',
        'text-slate-200 placeholder:text-slate-500',
        'focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300'
    );

    return (
        <SiteFrame active="contact">
            <div className="mb-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                    Contact
                </h2>
                <p className="mt-4 max-w-md text-slate-400" style={{ lineHeight: '1.625' }}>
                    Open to new work, research, and a straight conversation. Email, WhatsApp, or the form below.
                </p>
            </div>

            <ul className="mb-12 space-y-3 text-sm">
                <li>
                    <a href={`mailto:${profile.email}`} className="text-slate-300 hover:text-teal-300">
                        {profile.email}
                    </a>
                </li>
                <li>
                    <a
                        href={profile.socials.whatsapp}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-slate-300 hover:text-teal-300"
                    >
                        {profile.phone}
                    </a>
                </li>
                <li className="text-slate-500">{profile.location}</li>
            </ul>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                        placeholder="your.email@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-200">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={fieldClass}
                        placeholder="What's this about?"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className={cn(fieldClass, 'resize-none')}
                        placeholder="Your message here..."
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-teal-300 px-6 py-3 font-mono text-sm font-semibold text-slate-900 hover:bg-teal-200 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? 'Opening Email...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                    <p className="text-sm text-teal-300">
                        Your email client should open shortly. If it doesn&apos;t, write to{' '}
                        <a href={`mailto:${profile.email}`} className="underline">
                            {profile.email}
                        </a>
                        .
                    </p>
                )}
            </form>
        </SiteFrame>
    );
}
