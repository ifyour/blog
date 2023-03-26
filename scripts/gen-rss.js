const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const SITE_TITLE = "Ming's blog";
const SITE_URL = 'https://mingming.dev/';

// @TODO: for now let's generate with all posts, unsorted
async function generate() {
  const feed = new RSS({
    title: SITE_TITLE,
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`,
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'));

  await Promise.all(
    posts.map(async name => {
      if (name === '.DS_Store') return;
      if (name.startsWith('index.')) return;

      const content = await fs.readFile(path.join(__dirname, '..', 'pages', 'posts', name));
      const frontMatter = matter(content);

      feed.item({
        title: frontMatter.data.title,
        url: `${SITE_URL}posts/` + name.replace(/\.mdx?/, ''),
        date: frontMatter.data.date,
        description: frontMatter.data.description,
        categories: frontMatter.data.tag.split(', '),
        author: frontMatter.data.author,
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
