import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import Gradient from '@/components/layout/global/gradient';
import ProgressBarProvider from '@/components/providers/ProgressBarProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import Particles from '@/components/layout/particles/particles';
import { unstable_ViewTransition as ViewTransition } from 'react';

import { apiService } from '@/services/api';
import { DeviceProvider } from '@/components/providers/DeviceProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const globalMetadata = await apiService.getGlobalData();

    return {
      title: globalMetadata.title,
      description: globalMetadata.description,
    };
  } catch (error) {
    throw new Error('Error al generar metadata', { cause: error });
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <GoogleAnalytics gaId="G-D2X23339MH" />
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col items-center overflow-x-hidden`}
      >
        <ProgressBarProvider>
          <DeviceProvider>
            <Gradient />
            <Particles />
            <Header />
            <ViewTransition>
              <main className="flex flex-col items-center w-full overflow-x-hidden">
                {children}
              </main>
            </ViewTransition>
            <Footer />
          </DeviceProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
