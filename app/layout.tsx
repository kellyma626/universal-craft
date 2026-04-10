import type { Metadata } from 'next';
import { Inter, Pinyon_Script, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import { AuthProvider } from '@/context/AuthContext';

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

const dmSerif = DM_Serif_Display({
  variable: '--font-dmSerif',
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
      <body
        className={`${inter.variable} ${pinyon.variable} ${dmSerif.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
            <CartDrawer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
