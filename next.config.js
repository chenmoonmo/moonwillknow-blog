const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      "www.notion.so",
      "notion.so",
      "images.unsplash.com",
      "pbs.twimg.com",
      "s3.us-west-2.amazonaws.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withPWA(nextConfig);
