const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer()({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
    ],
  },
  experimental: { esmExternals: true },
});
