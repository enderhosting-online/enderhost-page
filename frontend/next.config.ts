import type { NextConfig } from 'next';
import MillionLint from '@million/lint';

const baseConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: false,
};

const nextConfig: NextConfig = process.env.NODE_ENV === 'production'
  ? MillionLint.next({ rsc: true })(baseConfig)
  : baseConfig;

export default nextConfig;
