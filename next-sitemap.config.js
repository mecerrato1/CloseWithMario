/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://closewithmario.com',
  generateRobotsTxt: true,
  robotsTxtOptions: { policies: [{ userAgent: '*', allow: '/' }] },
};
