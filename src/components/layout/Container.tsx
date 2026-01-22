import { cn } from '@/lib/utils';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: 'default' | 'narrow' | 'wide';
}

export function Container({
    children,
    className,
    size = 'default'
}: ContainerProps) {
    return (
        <div
            className={cn(
                'w-full mx-auto px-6 md:px-12 lg:px-24',
                {
                    'max-w-[1000px]': size === 'default',
                    'max-w-[700px]': size === 'narrow',
                    'max-w-[1400px]': size === 'wide',
                },
                className
            )}
        >
            {children}
        </div>
    );
}
