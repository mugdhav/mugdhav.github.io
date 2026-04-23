const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataFile = fs.readFileSync(path.join(__dirname, 'assets/js/portfolio_data.js'), 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataFile.replace(/const\s+portfolioData/, 'portfolioData'), sandbox);
const blogs = sandbox.portfolioData.blogs;

const BASE_URL = 'https://www.vmugdha.in';

function toRFC822(dateStr) {
  return new Date(dateStr).toUTCString();
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const sorted = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

const items = sorted.map(entry => {
  const link = entry.url || `${BASE_URL}/blog/${entry.slug}.html`;
  return `
  <item>
    <title>${escapeXml(entry.title)}</title>
    <link>${escapeXml(link)}</link>
    <description>${escapeXml(entry.excerpt)}</description>
    <pubDate>${toRFC822(entry.date)}</pubDate>
    <category>${escapeXml(entry.category)}</category>
    <guid isPermaLink="true">${escapeXml(link)}</guid>
  </item>`;
}).join('');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>vmugdha.in — Blog</title>
    <link>${BASE_URL}/blog/blog.html</link>
    <description>AI development, technical writing, and community building by Mugdha Vairagade</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

fs.writeFileSync(path.join(__dirname, 'feed.xml'), feed, 'utf8');
console.log(`feed.xml written with ${sorted.length} entries`);
