module.exports = {
  target: 'serverless',
  options: {
    dist: 'out_publish',
  },
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
    ],
  },
};
