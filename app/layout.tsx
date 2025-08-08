import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bolaji Comfort Adeniyi - Technology Entrepreneurship Expert',
  description: 'PhD candidate and lecturer specializing in Technology Entrepreneurship, Digital Marketing, and E-commerce. Research-focused academic with international conference presentations.',
  keywords: 'Technology Entrepreneurship, Digital Marketing, E-commerce, Academic Research, University Lecturer, PhD Candidate',
  authors: [{ name: 'Bolaji Comfort Adeniyi' }],
  openGraph: {
    title: 'Bolaji Comfort Adeniyi - Technology Entrepreneurship Expert',
    description: 'PhD candidate and lecturer specializing in Technology Entrepreneurship, Digital Marketing, and E-commerce.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bolaji Comfort Adeniyi - Technology Entrepreneurship Expert',
    description: 'PhD candidate and lecturer specializing in Technology Entrepreneurship, Digital Marketing, and E-commerce.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
