'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navItems, profile } from '@/lib/data';
import { Button } from '@/components/ui';
import { Container } from './Container';

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'py-4 bg-[var(--navy)]/90 backdrop-blur-md shadow-lg'
                        : 'py-6 bg-transparent'
                )}
            >
                <Container size="wide">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-[var(--accent)] font-mono text-lg hover:opacity-80 transition-opacity"
                        >
                            <span className="font-bold">{profile.name.split(' ')[0]}</span>
                            <span className="text-[var(--slate)]"> Maulana</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <ul className="flex items-center gap-6">
                                {navItems.map((item, index) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="group flex items-center gap-1 font-mono text-sm text-[var(--slate-light)] hover:text-[var(--accent)] transition-colors"
                                        >
                                            <span className="text-[var(--accent)] text-xs"> - </span>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="outline">
                                    Resume
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-[var(--accent)] block origin-center"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-0.5 bg-[var(--accent)] block"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-[var(--accent)] block origin-center"
                            />
                        </button>
                    </nav>
                </Container>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-[var(--navy)]/80 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.aside
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, delay: 0.1 }}
                            className="absolute right-0 top-0 bottom-0 w-[min(75vw,400px)] bg-[var(--navy-light)] p-12 flex flex-col justify-center"
                        >
                            <nav>
                                <ul className="flex flex-col gap-6 text-center">
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + index * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block font-mono text-lg text-[var(--slate-light)] hover:text-[var(--accent)] transition-colors"
                                            >
                                                <span className="block text-[var(--accent)] text-sm mb-1">
                                                    0{index + 1}.
                                                </span>
                                                {item.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-10 text-center"
                                >
                                    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" variant="outline">
                                            Resume
                                        </Button>
                                    </Link>
                                </motion.div>
                            </nav>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
