import { useRouter } from "next/router";

import { getPosts } from '@/preAPI/posts'
import { Post } from "@/components/templates";

const JournalPost = ({ posts }) => {
  const router = useRouter();
  const { postName } = router.query;
  const [post] = posts.filter(post => postName.includes(post.title));

  return (
    <React.Fragment>
      <h3>{postName}</h3>
      <p dangerouslySetInnerHTML={{__html: post.content}}></p>
    </React.Fragment>
  );
};

const getStaticPaths = async () => {
  const allPosts = await getPosts({
    categoryURI: 'journal'
  });
  const paths = allPosts.map(({ postURI }) => `/${encodeURI(postURI)}`) || [];
  
  return {
    paths,
    fallback: false,
  }
}

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

export {
  getStaticPaths,
  getStaticProps
}

export default JournalPost;
