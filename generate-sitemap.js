const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://djelajahpujoku.netlify.app/' });

sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
sitemap.write({ url: '/tentang', changefreq: 'monthly', priority: 0.8 });
// Tambah URL lain di sini
sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data);
});
