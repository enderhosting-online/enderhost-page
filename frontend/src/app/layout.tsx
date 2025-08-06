import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import Gradient from '@/components/layout/global/gradient';
import ProgressBarProvider from '@/components/providers/ProgressBarProvider';
import { metadataConfig } from '@/config/metadata';
import { GoogleTagManager } from '@next/third-parties/google';
import Particles from '@/components/layout/particles/particles';

import directus from '@/lib/directus';
import { SimgleItem } from '@/types/directus';
import { readItems } from '@directus/sdk';
import { ResolvingMetadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export async function generateMetadata(
  _params: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;

  try {
    const globalMetadata = await directus.request(readItems('global_data')) as SimgleItem;

    return {
      title: globalMetadata.title,
      description: globalMetadata.description,
    };
  } catch (error) {
    console.error('Error al generar metadata:', error);

    return {
      title: parentMetadata.title,
      description: parentMetadata.description,
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="G-D2X23339MH" />
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col items-center overflow-x-hidden`}
      >
        <ProgressBarProvider>
          <Gradient />
          <Particles />
          <Header />
          <main className="flex flex-col items-center w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
