'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'outline', size = 'md', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base styles
                    'inline-flex items-center justify-center font-mono text-sm transition-all duration-300 ease-out',
                    'focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]',
                    'disabled:opacity-50 disabled:cursor-not-allowed',

                    // Size variants
                    {
                        'px-4 py-2 text-xs': size === 'sm',
                        'px-6 py-3 text-sm': size === 'md',
                        'px-8 py-4 text-base': size === 'lg',
                    },

                    // Style variants
                    {
                        // Outline (default) - Brittany Chiang style
                        'border border-[var(--accent)] text-[var(--accent)] bg-transparent hover:bg-[var(--accent-tint)] rounded':
                            variant === 'outline',
                        // Primary - filled
                        'bg-[var(--accent)] text-[var(--navy)] hover:bg-[var(--accent)]/90 rounded font-semibold':
                            variant === 'primary',
                        // Ghost - minimal
                        'text-[var(--accent)] hover:bg-[var(--accent-tint)] rounded':
                            variant === 'ghost',
                    },

                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
