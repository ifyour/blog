const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

// @TODO: for now let's generate with all posts, unsorted
async function generate() {
  const feed = new RSS({
    title: "Ming's blog",
    site_url: 'https://mingming.dev/',
    feed_url: 'https://mingming.dev/feed.xml',
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'))

  await Promise.all(posts.map(async name => {
    if (name === '.DS_Store') return
    if (name.startsWith('index.')) return

    const content = await fs.readFile(path.join(__dirname, '..', 'pages', 'posts', name))
    const frontmatter = matter(content)

    feed.item({
      title: frontmatter.data.title,
      url: '/posts/' + name.replace(/\.mdx?/, ''),
      date: frontmatter.data.date,
      description: frontmatter.data.description,
      categories: frontmatter.data.tag.split(', '),
      author: frontmatter.data.author
    })
  }))

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
