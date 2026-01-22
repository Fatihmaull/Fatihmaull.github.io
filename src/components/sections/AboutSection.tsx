'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/layout';
import { profile } from '@/lib/data';

const skills = [
    'Quantum Computing',
    'Cybersecurity',
    'Full-Stack Development',
    'Quantitative Finance',
    'Python',
    'TypeScript',
    'Next.js',
    'Flutter',
    'Django',
    'Machine Learning',
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
                        Hello! I&apos;m <span className="text-[var(--accent)]">{profile.name}</span>, a Computer Science
                        Researcher & Engineer currently on an exchange program at{' '}
                        <span className="text-[var(--accent)]">Universiti Utara Malaysia (UUM)</span>.
                        I&apos;m on a Summa Cum Laude track, blending rigorous academic research with practical
                        engineering solutions.
                    </p>

                    <p className="text-[var(--slate)] leading-relaxed">
                        My expertise spans across <span className="text-[var(--accent)]">Quantum Computing</span>,{' '}
                        <span className="text-[var(--accent)]">Quantitative Finance</span>, and{' '}
                        <span className="text-[var(--accent)]">Cybersecurity</span>. I believe in building systems
                        that are not just functional, but also secure, scalable, and future-ready.
                    </p>

                    <p className="text-[var(--slate)] leading-relaxed">
                        Currently, I&apos;m focused on benchmarking hybrid quantum-classical algorithms and
                        exploring the intersection of physics and finance. When I&apos;m not coding, you&apos;ll
                        find me diving deep into research papers or contributing to open-source projects.
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
