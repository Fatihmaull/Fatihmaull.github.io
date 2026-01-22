import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerSize?: 'default' | 'narrow' | 'wide';
}

export function Section({
    children,
    id,
    className,
    containerSize = 'default'
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                'py-16 md:py-24 lg:py-32',
                className
            )}
        >
            <Container size={containerSize}>
                {children}
            </Container>
        </section>
    );
}

interface SectionHeadingProps {
    number?: string;
    children: React.ReactNode;
    className?: string;
}

export function SectionHeading({
    number,
    children,
    className
}: SectionHeadingProps) {
    return (
        <h2
            className={cn(
                'flex items-center gap-2 mb-10 text-2xl md:text-3xl font-semibold text-[var(--slate-light)]',
                'after:content-[""] after:block after:h-px after:w-full after:max-w-[300px] after:ml-4 after:bg-[var(--navy-lighter)]',
                className
            )}
        >
            {number && (
                <span className="font-mono text-lg md:text-xl text-[var(--accent)] font-normal">
                    {number}.
                </span>
            )}
            {children}
        </h2>
    );
}
