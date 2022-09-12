const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['i.scdn.co', 'mosaic.scdn.co'],
  },
  distDir: 'out_publish',
};

module.exports = withContentlayer(nextConfig);
