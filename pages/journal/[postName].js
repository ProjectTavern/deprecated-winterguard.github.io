import { getPosts, getPost } from '@/preAPI/posts'
import { Post } from "@/components/templates";
import { encode } from 'punycode';

const pageConfig = {
  categoryURI: 'journal'
}

const JournalPost = ({ post }) => {
  return (
    <React.Fragment>
      <h1>{Journal}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </React.Fragment>
  );
};

/**
 * 배포 환경에 따라 path 문자열을 인코딩할지를 결정하는 함수
 * 개발환경: 인코딩을 안했을 경우 제대로 인식하지 않음
 * @param {String} target 
 */
const parseStaticPathByEnvironment = (target) => {
  const environment = process.env.NODE_ENV;
  const isProduction = environment === 'production';
  const filteredTargetName = target.replace('.md', '');

  return isProduction ? filteredTargetName : encodeURI(filteredTargetName);
}

const getStaticPaths = async () => {
  const allPosts = await getPosts(pageConfig);
  const paths = allPosts.map(
    ({ filename }) => ({
      params: { postName: parseStaticPathByEnvironment(filename) }
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
