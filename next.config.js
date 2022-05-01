const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['i.scdn.co', 'mosaic.scdn.co'],
  },
  options: {
    dist: 'out_publish',
  },
});
