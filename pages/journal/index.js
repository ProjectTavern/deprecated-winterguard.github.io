import React from "react";
import { useRouter } from "next/router";

import { Journal } from "@/components/templates";
import { getPosts } from "@/preAPI/posts";

const JournalPage = ({ journalPosts }) => {
  const router = useRouter();
  const { category } = router.query;

  return <Journal category={category} posts={journalPosts} />;
};

const getStaticProps = async ({ params, preview = false, previewData }) => {
  const journalPosts = await getPosts({
    categoryURI: "journal",
  });

  return {
    props: {
      journalPosts,
    },
  };
};

export default JournalPage;
export { getStaticProps };
