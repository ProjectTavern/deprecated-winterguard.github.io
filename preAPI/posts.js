import matter from 'gray-matter'
import marked from 'marked'



export const getPosts = async () => {
  const context = require.context('../contents', true, /\.(md|html)$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../contents/${post}`);
    const mattered = matter(content.default);

    const categories = post.split('/')
    const title = categories.pop().replace(/\..+$/, '');

    posts.push({
      title,
      slug: post.replace('.md', ''),
      ...mattered,
      categories
    });
  }

  return posts;
}

export const getPost = async (slug) => {
  const fileContent = await import(`../contents/${slug}.md`);
  const mattered = matter(fileContent.default);
  const content = marked(meta.content);

  return {
    ...mattered,
    content
  }
}