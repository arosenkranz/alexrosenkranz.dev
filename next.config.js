const { withContentlayer } = require('next-contentlayer');
const { remarkCodeHike } = require('@code-hike/mdx');

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
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            remarkPlugins: [[remarkCodeHike]],
          },
        },
      ],
    });
    return config;
  },
});
