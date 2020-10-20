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
 * 개발 환경: path 경로 인코딩 - 인코딩을 안했을 경우 제대로 인식하지 않음
 * 깃허브페이지 환경: path 경로 인코딩 하지 않음 - path를 인코딩 했을 경우 깃허브 주소에서 호출할 수 없음
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
