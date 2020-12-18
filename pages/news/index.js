import { News } from "@/components/templates";

import { getPosts } from "@/preAPI/posts";

const NewsPage = ({ newsPosts }) => {
  return <News newsPosts={newsPosts} />;
};

const getStaticProps = async ({ params, preview = false, previewData }) => {
  const newsPosts = await getPosts({
    categoryURI: "news",
  });

  newsPosts.posts
    .sort((a, b) => b.writtenAt.localeCompare(a.writtenAt))
    .splice(8);

  return {
    props: {
      newsPosts,
    },
  };
};

export default NewsPage;
export { getStaticProps };
