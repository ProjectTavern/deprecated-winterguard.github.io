import { getPosts, getPost } from '@/preAPI/posts'
import { Post } from "@/components/templates";

const pageConfig = {
  categoryURI: 'journal'
}

const JournalPost = ({ post }) => {

  return (process.browser &&
    <React.Fragment>
      <h3>{post.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
    </React.Fragment>
  );
};

const getStaticPaths = async () => {
  const allPosts = await getPosts(pageConfig);
  const paths = allPosts.map(
    ({ filename }) => ({
      params: { postName: filename.replace('.md', '') }
    })
  );

  return {
    paths,
    fallback: false,
  }
}

const getStaticProps = async ({ params, preview = false, previewData }) => {
  const { postName } = params;
  const payload = Object.assign({ postName }, pageConfig)
  const post = await getPost(payload);

  return {
    props: {
      post
    }
  }
}

export {
  getStaticPaths,
  getStaticProps
}

export default JournalPost;
