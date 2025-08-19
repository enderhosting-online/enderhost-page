import { Metadata } from 'next';

export const defaultMetadataConfig: Metadata = {
  keywords: [
    'ENDER HOSTING',
    'Minecraft Hosting',
    'Servidor de Minecraft',
    'Hosting de Juegos',
    'Servidor de Juegos',
    'Hosting Rápido',
    'Fácil de Usar',
    'Comienza a Jugar',
  ],
  openGraph: {
    url: 'https://enderhost.online',
    siteName: 'ENDER HOSTING',
    images: [
      {
        url: 'https://ynoa-uploader.ynoacamino.site/uploads/1755618051_banner.webp',
        width: 900,
        height: 410,
        alt: 'ENDER HOSTING Open Graph Image',
      },
    ],
    locale: 'es',
    type: 'website',
  },
  metadataBase: new URL('https://enderhost.online'),
  alternates: { canonical: 'https://enderhost.online' },
  robots: {
    index: true,
    follow: true,
  },
};
