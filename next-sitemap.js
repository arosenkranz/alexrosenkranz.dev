/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://alexrosenkranz.dev',
  generateRobotsTxt: true,
};
