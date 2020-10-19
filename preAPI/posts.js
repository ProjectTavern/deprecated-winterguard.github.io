import matter from 'gray-matter'
import marked from 'marked'

export const getPosts = async (payload = {}) => {
  const { categoryURI = '' } = payload;
  const context = require.context(`../contents`, true, /\.(md|html)$/);
  const posts = [];

  for (const key of context.keys()) {
    const postURI = key.slice(2);

    if (categoryURI && !postURI.includes(categoryURI)) {
      continue;
    }

    const post = await import(`../contents/${postURI}`);
    const mattered = matter(post.default);

    const slug = postURI.replace('.md', '');
    const categories = postURI.split('/')
    const filename = categories.pop();
    const writtenAt = filename.match(/^(\d+)-(\d+)-(\d+)-/)[0].slice(0, -1);
    const title = filename.replace(/^(\d+)-(\d+)-(\d+)-/, '').replace(/\..+$/, '');
    const content = marked(mattered.content);

    posts.push({
      title,
      filename,
      slug,
      writtenAt,
      categories,
      postURI,
      ...mattered,
      content
    });
  }

  return posts;
}

export const getPost = async ({ postName, categoryURI }) => {
  const fileContent = await import(`../contents/${categoryURI}/${postName}`);
  const mattered = matter(fileContent.default);
  const content = marked(mattered.content);

  delete mattered.orig;

  return {
    ...mattered,
    content
  }
}
