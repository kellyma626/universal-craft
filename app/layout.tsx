import type { Metadata } from 'next';
import { Inter, Pinyon_Script } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const pinyon = Pinyon_Script({
  variable: '--font-pinyon',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Universal Craft',
  description: 'Decor and Crafts for Every Occasion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body className={`${inter.variable} ${pinyon.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
