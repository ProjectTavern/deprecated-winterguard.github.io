import matter from 'gray-matter'
import marked from 'marked'

const contentsFolder = '../contents';

export const getPosts = async () => {
  const context = require.context(contentsFolder, false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`${contentsFolder}/${post}`);
    const mattered = matter(content.default);

    posts.push({
      ...mattered,
      slug: post.replace('.md', '')
    });
  }

  return posts;
}

export const getPost = async (slug) => {
  const fileContent = await import(`${contentsFolder}/${slug}.md`);
  const mattered = matter(fileContent.default);
  const content = marked(meta.content);

  return {
    ...mattered,
    content
  }
}