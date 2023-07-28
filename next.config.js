const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MIX_PANEL_TOKEN: process.env.NEXT_PUBLIC_MIX_PANEL_TOKEN,
    NOTION_TOKEN: process.env.NEXT_PUBLIC_NOTION_TOKEN,
    NOTION_SPACE_ID: "7943a9acb48b4fd6ae1784a4d1957e14",
  },
  swcMinify: true,
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
