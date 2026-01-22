import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { defaultMetadata, generatePersonSchema } from '@/lib/metadata';
import './globals.css';

// Font configurations
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
