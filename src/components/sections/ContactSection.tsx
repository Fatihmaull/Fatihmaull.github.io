'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/layout';
import { Button } from '@/components/ui';
import { profile } from '@/lib/data';

export function ContactSection() {
    return (
        <Section id="contact" containerSize="narrow">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                {/* Section label */}
                <p className="font-mono text-[var(--accent)] mb-4">04. What&apos;s Next?</p>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--slate-light)] mb-6">
                    Get In Touch
                </h2>

                {/* Description */}
                <p className="text-[var(--slate)] max-w-lg mx-auto mb-12 leading-relaxed">
                    I&apos;m currently looking for new opportunities in{' '}
                    <span className="text-[var(--accent)]">Quantum Computing</span>,{' '}
                    <span className="text-[var(--accent)]">Cybersecurity</span>, and{' '}
                    <span className="text-[var(--accent)]">Full-Stack Development</span>.
                    Whether you have a question, a project idea, or just want to say hi,
                    my inbox is always open!
                </p>

                {/* CTA Button */}
                <Link href={`mailto:${profile.email}`}>
                    <Button size="lg" className="px-12">
                        Say Hello
                    </Button>
                </Link>

                {/* Additional contact info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 space-y-2"
                >
                    <p className="font-mono text-sm text-[var(--slate-dark)]">
                        {profile.email}
                    </p>
                    <p className="font-mono text-sm text-[var(--slate-dark)]">
                        {profile.phone}
                    </p>
                    <p className="font-mono text-xs text-[var(--slate-dark)] mt-4">
                        {profile.location}
                    </p>
                </motion.div>
            </motion.div>
        </Section>
    );
}
