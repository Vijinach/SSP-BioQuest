import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SSP BioQuest — Empowering Scientific Discovery',
  description:
    'SSP BioQuest provides cutting-edge laboratory equipment, cold-chain solutions, and customized research tools for laboratories and research facilities worldwide.',
  openGraph: {
    title: 'SSP BioQuest — Empowering Scientific Discovery',
    description:
      'Advanced laboratory equipment and innovative solutions for your research needs.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
