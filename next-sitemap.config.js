/** @type {import('next-sitemap').IConfig} */
const PRIORITY = { '/': 1.0, '/work': 0.8, '/contact': 0.8, '/about': 0.6, '/privacy': 0.2 };

module.exports = {
  siteUrl: 'https://nument.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404'],
  transform: async (config, path) => {
    let priority = PRIORITY[path];
    if (priority === undefined) priority = path.startsWith('/for/') ? 0.9 : 0.7;
    return { loc: path, changefreq: path === '/privacy' ? 'yearly' : 'monthly', priority, lastmod: new Date().toISOString() };
  },
};
