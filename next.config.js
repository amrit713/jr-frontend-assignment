/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lastfm.freetls.fastly.net","images.unsplash.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
