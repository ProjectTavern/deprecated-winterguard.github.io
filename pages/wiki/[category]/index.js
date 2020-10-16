import { useRouter } from "next/router";

import { PostList } from "@/components/templates";
import { getPosts } from '@/preAPI/posts'

const PostListPage = ({ posts }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <React.Fragment>
      <h2>{category}</h2>
      <PostList category={category} posts={posts} />
    </React.Fragment>
  );
};

const getStaticPaths = async () => {
  const allPosts = await getPosts();
  const paths = allPosts.map(({ categories }) => `/wiki/${categories[0]}`) || [];

  paths.push('/wiki/javascript')
  return {
    paths,
    fallback: false,
  }
}

const getStaticProps = async ({ params, preview = false, previewData }) => {
  const posts = await getPosts();
  posts.forEach(post => delete post.orig);

  return {
    props: {
      posts
    }
  }
}

export default PostListPage;
export {
  getStaticPaths,
  getStaticProps
}