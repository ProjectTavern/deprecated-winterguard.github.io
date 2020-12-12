import matter from "gray-matter";
import marked from "marked";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, language) {
    const hljs = require("highlight.js");
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";

    return hljs.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

export const getPosts = async (payload = {}) => {
  const { categoryURI = "" } = payload;
  const context = require.context(`../contents`, true, /\.(md|html)$/);
  const posts = [];

  for (const key of context.keys()) {
    const postURI = key.slice(2);
    const post = await import(`../contents/${postURI}`);
    const mattered = matter(post.default);
    delete mattered.orig;

    const slug = postURI.replace(".md", "");
    const categories = postURI.split("/");
    const filename = categories.pop();
    const writtenAt = filename.match(/^(\d+)-(\d+)-(\d+)-/)[0].slice(0, -1);
    const title = filename
      .replace(/^(\d+)-(\d+)-(\d+)-/, "")
      .replace(/\..+$/, "");
    const content = marked(mattered.content);

    const singleJournal = {
      key: postURI,
      title,
      filename,
      slug,
      writtenAt,
      categories,
      postURI,
      ...mattered,
      ...mattered.data,
      content,
    };

    const keySet = postURI.split("/");

    function setKeyJournalPosts(keySet, categoryItems) {
      const [key] = keySet;

      let singleCategoryItem = {};

      const findCategoryIndex = categoryItems.findIndex(
        (categoryItem) => categoryItem.key === key
      );
      const isAlreadyHavenKey = findCategoryIndex > -1;

      if (isAlreadyHavenKey) {
        singleCategoryItem = categoryItems[findCategoryIndex];
      } else {
        categoryItems.push(singleCategoryItem);
      }

      if (!singleCategoryItem.key) {
        singleCategoryItem.key = key;
      }

      if (!singleCategoryItem.posts) {
        singleCategoryItem.posts = [];
      }

      if (!singleCategoryItem.children) {
        singleCategoryItem.children = [];
      }

      const nextKeySet = keySet.slice(1);
      if (nextKeySet.length === 1) {
        return singleCategoryItem.posts.push(singleJournal);
      }

      return setKeyJournalPosts(nextKeySet, singleCategoryItem.children);
    }

    setKeyJournalPosts(keySet, posts);
  }

  return posts.find((post) => post.key === categoryURI);
};

export const getPost = async ({ categoryURI, params }) => {
  const { classification, postName } = params;
  const fileContent = await import(
    `../contents/${categoryURI}/${classification}/${postName}.md`
  );
  const mattered = matter(fileContent.default);
  const content = marked(mattered.content);

  delete mattered.orig;

  return {
    ...mattered,
    content,
  };
};
