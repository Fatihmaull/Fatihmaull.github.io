'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { profile, projects, experiences } from '@/lib/data';
import { cn } from '@/lib/utils';

// Social icons
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
};

const sectionIds = ['about', 'experience', 'projects'];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* MAIN CONTAINER - Centered with max-width */}
      <div
        className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >

        {/* SPLIT LAYOUT */}
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* LEFT COLUMN - Sticky Header/Nav */}
          <header
            className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
            style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
          >
            <div>
              {/* Name */}
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">{profile.name}</Link>
              </h1>

              {/* Title */}
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Quantum Researcher & Full-Stack Engineer
              </h2>

              {/* Short Bio */}
              <p className="mt-4 max-w-xs text-slate-400" style={{ lineHeight: '1.6' }}>
                I build secure, scalable systems for the quantum era — from research algorithms to production applications.
              </p>

              {/* Navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {sectionIds.map((section) => (
                    <li key={section}>
                      <a
                        href={`#${section}`}
                        className={cn(
                          'group flex items-center py-3',
                          activeSection === section
                            ? 'text-slate-200'
                            : 'text-slate-500'
                        )}
                      >
                        <span
                          className={cn(
                            'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none',
                            activeSection === section && 'w-16 bg-slate-200'
                          )}
                        />
                        <span className={cn(
                          'nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200',
                          activeSection === section && 'text-slate-200'
                        )}>
                          {section}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links - Pinned to bottom */}
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 shrink-0">
                <Link
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block text-slate-400 hover:text-slate-200 transition"
                  aria-label="GitHub (opens in a new tab)"
                >
                  {socialIcons.github}
                </Link>
              </li>
              <li className="mr-5 shrink-0">
                <Link
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block text-slate-400 hover:text-slate-200 transition"
                  aria-label="LinkedIn (opens in a new tab)"
                >
                  {socialIcons.linkedin}
                </Link>
              </li>
              <li className="mr-5 shrink-0">
                <Link
                  href={profile.socials.email}
                  className="block text-slate-400 hover:text-slate-200 transition"
                  aria-label="Email"
                >
                  {socialIcons.email}
                </Link>
              </li>
            </ul>
          </header>

          {/* RIGHT COLUMN - Scrollable Content */}
          <main
            id="content"
            className="pt-24 lg:w-1/2 lg:py-24"
            style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
          >

            {/* ABOUT SECTION */}
            <section
              id="about"
              className="section-spacing scroll-mt-16 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>

              <div>
                <p className="mb-4" style={{ lineHeight: '1.625' }}>
                  I&apos;m a frontend engineer with a specialty in{' '}
                  <span className="font-medium text-slate-200">quantum computing research</span>,
                  focused on building pixel-perfect, intuitive user interfaces. I enjoy working at
                  the intersection of design and engineering, where great user experience meets
                  robust, clean, and scalable code.
                </p>

                <p className="mb-4" style={{ lineHeight: '1.625' }}>
                  Currently, I&apos;m a{' '}
                  <span className="font-medium text-slate-200">Computer Science Researcher</span> at{' '}
                  <Link
                    href="https://uum.edu.my"
                    target="_blank"
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  >
                    Universiti Utara Malaysia
                  </Link>
                  , where I work on benchmarking hybrid quantum-classical algorithms. In this role,
                  I lead research efforts across VQC optimization, particle physics classification,
                  and ML patterns, partnering closely with professors and engineers to ensure
                  research translates to practical applications.
                </p>

                <p className="mb-4" style={{ lineHeight: '1.625' }}>
                  Previously, I&apos;ve worked across a wide range of environments, from{' '}
                  <Link href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    government institutions
                  </Link>{' '}
                  to startups and tech companies, including{' '}
                  <Link href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    Ibunda.id
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    StudentxCEOs
                  </Link>
                  . Alongside my professional work, I also salvaged a{' '}
                  <Link href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    national voting system
                  </Link>{' '}
                  24 hours before launch. These experiences have shaped how I think about building
                  products that are both well-crafted and widely usable.
                </p>

                <p style={{ lineHeight: '1.625' }}>
                  Outside of work, you can usually find me diving into research papers on quantum
                  machine learning or exploring the intersection of physics and high-frequency trading.
                </p>
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section
              id="experience"
              className="section-spacing scroll-mt-16 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
              </div>

              <div>
                <ol className="group/list">
                  {experiences.map((exp, index) => (
                    <li key={exp.id} style={{ marginBottom: '3rem' }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                      >
                        {/* Hover background */}
                        <div
                          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
                          style={{
                            backgroundColor: 'transparent',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.5)';
                            e.currentTarget.style.boxShadow = 'inset 0 1px 0 0 rgba(148,163,184,0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />

                        {/* Date Column */}
                        <header
                          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                          aria-label={exp.period}
                        >
                          {exp.period}
                        </header>

                        {/* Content Column */}
                        <div className="z-10 sm:col-span-6">
                          {/* Title */}
                          <h3 className="font-medium leading-snug text-slate-200">
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                              href="#"
                              aria-label={`${exp.role} at ${exp.company} (opens in a new tab)`}
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {exp.role}
                                <span className="inline-block">
                                  {' · '}
                                  {exp.company}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>

                          {/* Description */}
                          <p
                            className="mt-2 text-sm"
                            style={{ lineHeight: '1.625' }}
                          >
                            {exp.description.join(' ')}
                          </p>

                          {/* Tags - using custom CSS class */}
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {exp.tags.map((tag) => (
                              <li key={tag}>
                                <span className="experience-tag">{tag}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </li>
                  ))}
                </ol>

                {/* Resume Link */}
                <div style={{ marginTop: '3rem' }}>
                  <a
                    href="/resume.pdf"
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    aria-label="View Full Résumé (opens in a new tab)"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                        View Full Résumé
                      </span>
                      <span className="whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:translate-x-2 group-focus-visible/link:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section
              id="projects"
              className="section-spacing scroll-mt-16 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>

              <div>
                <ul className="group/list">
                  {projects.map((project, index) => (
                    <li key={project.id} style={{ marginBottom: '3rem' }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                      >
                        {/* Hover background */}
                        <div
                          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
                          style={{ backgroundColor: 'transparent' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        />

                        {/* Thumbnail */}
                        <div className="z-10 sm:order-1 sm:col-span-2">
                          <div
                            className="rounded aspect-video flex items-center justify-center overflow-hidden"
                            style={{
                              border: '2px solid rgba(226, 232, 240, 0.1)',
                              backgroundColor: 'rgba(30, 41, 59, 0.5)'
                            }}
                          >
                            <span className="text-slate-500 text-xs font-mono">{project.id}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                              href="#"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {project.title}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </a>
                          </h3>

                          <p className="mt-2 text-sm" style={{ lineHeight: '1.625' }}>
                            {project.description}
                          </p>

                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {project.tags.slice(0, 4).map((tag) => (
                              <li key={tag}>
                                <span className="experience-tag">{tag}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </li>
                  ))}
                </ul>

                {/* View Archive Link */}
                <div style={{ marginTop: '3rem' }}>
                  <a
                    href="/blog/"
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                        View Full Project Archive
                      </span>
                      <span className="whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:translate-x-2 group-focus-visible/link:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* FOOTER */}
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
