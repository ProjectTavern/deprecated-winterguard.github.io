import { useRouter } from "next/router";

import { PostList } from "@/components/templates";

import { getPosts } from '@/preAPI/posts'

const PostListPage = ({ posts }) => {
  const router = useRouter();
  const { category } = router.query;
  console.log(posts);

  return (
    <React.Fragment>
      <h2>{category}</h2>
      <PostList category={category} posts={posts} />
    </React.Fragment>
  );
};

export default PostListPage;

export const getStaticProps = async ({ params, preview = false, previewData }) => {
  const posts = await getPosts();
  posts.forEach(post => delete post.orig);

  return {
    props: {
      posts
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getPosts();
  const paths = allPosts.map(({ categories }) => `/study/${categories[0]}`) || [];

  return {
    paths,
    fallback: true,
  }
}