'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { profile, skillTags } from '@/lib/data';
import { Button, Tag } from '@/components/ui';
import { Container } from '@/components/layout';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20">
            <Container>
                <div className="max-w-3xl">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="font-mono text-[var(--accent)] mb-5 text-sm md:text-base"
                    >
                        Hi, my name is
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--slate-light)] mb-2"
                    >
                        {profile.name}.
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--slate)] mb-8"
                    >
                        I build things for the quantum era.
                    </motion.h2>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-[var(--slate)] text-base md:text-lg mb-8 leading-relaxed max-w-xl"
                    >
                        I&apos;m a <span className="text-[var(--accent)]">Computer Science Researcher</span> specializing in{' '}
                        <span className="text-[var(--accent)]">Quantum Computing</span>,{' '}
                        <span className="text-[var(--accent)]">Quantitative Finance</span>, and{' '}
                        <span className="text-[var(--accent)]">Cybersecurity</span>. Currently on an exchange program in Malaysia,
                        pursuing a Summa Cum Laude track.
                    </motion.p>

                    {/* Skill Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-wrap gap-2 mb-10"
                    >
                        {skillTags.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.05 }}
                            >
                                <Tag variant="default" size="md">
                                    {skill}
                                </Tag>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/#work">
                            <Button size="lg">View My Work</Button>
                        </Link>
                        <Link href={`mailto:${profile.email}`}>
                            <Button size="lg" variant="ghost">
                                Get In Touch
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-6 h-10 rounded-full border-2 border-[var(--slate-dark)] flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        className="w-1 h-2 bg-[var(--accent)] rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
