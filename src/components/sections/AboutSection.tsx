'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/layout';
import { profile } from '@/lib/data';

const skills = [
    'Python',
    'TypeScript',
    'Rust',
    'Solidity',
    'Next.js',
    'Django',
    'Flutter',
    'Security',
];

export function AboutSection() {
    return (
        <Section id="about">
            <SectionHeading number="01">About Me</SectionHeading>

            <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <p className="text-[var(--slate)] leading-relaxed">
                        Hello! I&apos;m <span className="text-[var(--accent)]">{profile.name}</span>, an engineer and
                        researcher at the intersection of{' '}
                        <span className="text-[var(--accent)]">distributed systems</span>,{' '}
                        <span className="text-[var(--accent)]">applied cryptography</span>, and{' '}
                        <span className="text-[var(--accent)]">AI</span>.
                    </p>

                    <p className="text-[var(--slate)] leading-relaxed">
                        I&apos;m a Forward Deployed Engineer solving end-to-end business problems with technology and AI,
                        and I&apos;ve shipped production apps for SMEs and early-stage startups since 2024.
                    </p>

                    <p className="text-[var(--slate)] leading-relaxed">
                        First-author research covers post-quantum cryptography for high-throughput blockchains and
                        blockchain supply-chain traceability (gold medal). I also contribute to Stellar open source,
                        with build experience on Solana and Base.
                    </p>

                    <p className="text-[var(--slate)] leading-relaxed mb-6">
                        Here are some technologies I&apos;ve been working with recently:
                    </p>

                    {/* Skills Grid */}
                    <ul className="grid grid-cols-2 gap-2 max-w-md">
                        {skills.slice(0, 8).map((skill, index) => (
                            <motion.li
                                key={skill}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 font-mono text-sm text-[var(--slate)]"
                            >
                                <span className="text-[var(--accent)]">▹</span>
                                {skill}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Profile Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative group"
                >
                    <div className="relative w-full max-w-[300px] mx-auto aspect-square">
                        {/* Image wrapper with border effect */}
                        <div className="absolute inset-0 rounded-lg bg-[var(--accent)] opacity-20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />

                        {/* Placeholder for actual image */}
                        <div className="relative rounded-lg overflow-hidden bg-[var(--navy-light)] aspect-square border-2 border-[var(--accent)]/30 group-hover:border-[var(--accent)]/60 transition-colors">
                            {/* Replace with actual image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--navy-lighter)] flex items-center justify-center">
                                        <span className="text-4xl text-[var(--accent)]">FM</span>
                                    </div>
                                    <p className="font-mono text-sm text-[var(--slate)]">{profile.name}</p>
                                    <p className="font-mono text-xs text-[var(--slate-dark)] mt-1">
                                        Researcher & Engineer
                                    </p>
                                </div>
                            </div>

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
