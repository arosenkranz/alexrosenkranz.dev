const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer()({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.scdn.co', 'mosaic.scdn.co'],
  },
  experimental: { esmExternals: true },
  target: 'serverless',
  options: {
    dist: 'out_publish',
  },
});
