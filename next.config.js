/** @type {import('next').NextConfig} */
const path = require('path');

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    customWorkerDir: './worker',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['www.notion.so', 's3.us-west-2.amazonaws.com'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  compress: true,
});

module.exports = nextConfig;
