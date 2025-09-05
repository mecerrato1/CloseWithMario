import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://closewithmario.com'),
  title: { default: 'Close With Mario', template: '%s | Close With Mario' },
  description: 'Real estate + mortgage in one place. Buy smarter, finance better.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://closewithmario.com',
    title: 'Close With Mario',
    description: 'Real estate + mortgage in one place.',
    siteName: 'Close With Mario',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Close With Mario',
    description: 'Real estate + mortgage in one place.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
