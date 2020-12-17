import React from "react";
import Head from "next/head";

import { Main } from "@/components/templates";

import document from "@/store/document";

import { getPosts } from "@/preAPI/posts";

const HomePage = ({ latestPosts }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{document.title} - Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main latestPosts={latestPosts} />
    </React.Fragment>
  );
};

const getStaticProps = async ({ params, preview = false, previewData }) => {
  const posts = await getPosts();

  let linearPosts = [];

  (function putPostsToLinear(categoryPosts) {
    categoryPosts.forEach((categoryPost) => {
      linearPosts = [...linearPosts, ...categoryPost.posts];
      if (categoryPost.children.length === 0) {
        return;
      } else {
        putPostsToLinear(categoryPost.children);
      }
    });
  })(posts);

  const latestPosts = linearPosts
    .sort((a, b) => b.writtenAt.localeCompare(a.writtenAt))
    .slice(0, 7);

  return {
    props: {
      latestPosts,
    },
  };
};

export default HomePage;
export { getStaticProps };
