/** @type {import('next').NextConfig} */
const path = require('path');

const withPWA = require('next-pwa')({
   dest: 'public',
   disable: process.env.NODE_ENV === 'production'
 });

const nextConfig = withPWA({
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
