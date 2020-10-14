import { getPosts } from '@/preAPI/posts'

const Study = (props) => {
  return <div>Study</div>
}

export default Study;

export const getStaticProps = async () => {
  const posts = await getPosts();
  console.log(posts);

  return {
    props: {}
  }
}