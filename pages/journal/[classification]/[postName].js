import React from "react";
import { getPosts, getPost } from "@/preAPI/posts";
import { PostArticle } from "@/components/templates";

const pageConfig = {
  categoryURI: "journal",
};

const JournalPostPage = ({ post }) => {
  return <PostArticle post={post} />;
};

/**
 * 배포 환경에 따라 path 문자열을 인코딩할지를 결정하는 함수
 * 개발 환경: path 경로 인코딩 - 인코딩을 안했을 경우 제대로 인식하지 않음
 * 깃허브페이지 환경: path 경로 인코딩 하지 않음 - path를 인코딩 했을 경우 깃허브 주소에서 호출할 수 없음
 * @param {String} target
 */
const parseStaticPathByEnvironment = (target) => {
  const environment = process.env.NODE_ENV;
  const isProduction = environment === "production";
  const filteredTargetName = target.replace(".md", "");
  const targetParams = filteredTargetName.split("/");
  const [, classification, postName] = targetParams;
  const encodedPostName = isProduction ? postName : encodeURI(postName);
  return {
    classification,
    postName: encodedPostName,
  };
};

const getStaticPaths = async () => {
  const allPosts = await getPosts(pageConfig);

  function setLinearPosts(category) {
    let posts = [];
    function renderPosts(category) {
      posts = [...posts, ...category.posts];
    }
    if (category.children) {
      category.children.forEach((child) => {
        renderPosts(child);
      });
    }

    return posts;
  }

  const posts = setLinearPosts(allPosts);
  const paths = posts.map(({ key }) => {
    const params = parseStaticPathByEnvironment(key);

    return { params };
  });

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params, preview = false, previewData }) => {
  const payload = Object.assign({ params }, pageConfig);
  const post = await getPost(payload);

  return {
    props: {
      post,
    },
  };
};

export { getStaticPaths, getStaticProps };

export default JournalPostPage;
