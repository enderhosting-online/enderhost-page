/* eslint-disable no-console */

import type { NextConfig } from 'next';
import MillionLint from '@million/lint';

const baseConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  experimental: {
    viewTransition: true,
  },
};

const nextConfig: NextConfig = process.env.NODE_ENV === 'production'
  ? (() => {
    console.info('⚡ Compilando con Million en modo producción');
    return MillionLint.next({ rsc: true })(baseConfig);
  })()
  : (() => {
    console.info('🚀 Compilando con configuración base (sin Million)');
    return baseConfig;
  })();

export default nextConfig;
