import React from "react";
import { useRouter } from "next/router";

import { Journal } from "@/components/templates";
import { getPosts } from "@/preAPI/posts";

const JournalPage = ({ posts }) => {
  const router = useRouter();
  const { category } = router.query;

  return <Journal category={category} posts={posts} />;
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
