import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
    return (
        <div
            className={cn(
                // Base styles
                'relative bg-[var(--navy-light)] rounded-lg overflow-hidden',
                'border border-[var(--navy-lighter)]/50',

                // Hover effects
                hover && [
                    'transition-all duration-300 ease-out',
                    'hover:border-[var(--accent)]/30',
                    'hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]',
                    'hover:-translate-y-1',
                ],

                className
            )}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
    return (
        <div className={cn('p-6 pb-0', className)}>
            {children}
        </div>
    );
}

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
    return (
        <div className={cn('p-6', className)}>
            {children}
        </div>
    );
}

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
    return (
        <div className={cn('p-6 pt-0', className)}>
            {children}
        </div>
    );
}
