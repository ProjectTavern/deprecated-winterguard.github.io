import { useRouter } from "next/router";

import { PostList } from "@/components/templates";
import { getPosts } from '@/preAPI/posts'

const Journal = ({ posts }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <React.Fragment>
      <h2>Journal</h2>
      <PostList category={category} posts={posts} />
    </React.Fragment>
  );
};

const getStaticProps = async ({ params, preview = false, previewData }) => {
  const posts = await getPosts({
    categoryURI: 'journal'
  });
  posts.forEach(post => delete post.orig);

  return {
    props: {
      posts
    }
  }
}

export default Journal;
export {
  getStaticProps
}
