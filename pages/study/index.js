import { getPosts } from '@/preAPI/posts'

const Study = ({ posts }) => {
  return (
    <div>
      <h2>Study</h2>
      {posts.map(post => <div key={post.content}>{post.title}</div>)}
    </div>
  )
}

export default Study;

export const getStaticProps = async () => {
  const posts = await getPosts();
  posts.forEach(post => delete post.orig);

  return {
    props: {
      posts
    }
  }
}