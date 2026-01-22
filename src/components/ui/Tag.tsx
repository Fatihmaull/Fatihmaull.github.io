import { cn } from '@/lib/utils';

interface TagProps {
    children: React.ReactNode;
    variant?: 'default' | 'accent' | 'muted';
    size?: 'sm' | 'md';
    className?: string;
}

export function Tag({
    children,
    variant = 'default',
    size = 'sm',
    className
}: TagProps) {
    return (
        <span
            className={cn(
                // Base styles
                'inline-flex items-center font-mono rounded-full transition-colors duration-200',

                // Size variants
                {
                    'px-2.5 py-0.5 text-xs': size === 'sm',
                    'px-3 py-1 text-sm': size === 'md',
                },

                // Style variants
                {
                    // Default - navy background
                    'bg-[var(--navy-lighter)] text-[var(--accent)]': variant === 'default',
                    // Accent - highlighted
                    'bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent)]/30': variant === 'accent',
                    // Muted - subtle
                    'bg-[var(--navy-light)] text-[var(--slate)]': variant === 'muted',
                },

                className
            )}
        >
            {children}
        </span>
    );
}
