import React from "react";
import { useRouter } from "next/router";

import { Journal } from "@/components/templates";
import { getPosts } from "@/preAPI/posts";

const JournalPage = ({ posts }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <React.Fragment>
      <h2>Journal</h2>
      <Journal category={category} posts={posts} />
    </React.Fragment>
  );
};

const getStaticProps = async ({ params, preview = false, previewData }) => {
  const posts = await getPosts({
    categoryURI: "journal",
  });
  posts.forEach((post) => delete post.orig);

  return {
    props: {
      posts,
    },
  };
};

export default JournalPage;
export { getStaticProps };
