import { useRouter } from 'next/router'

const PostList = () => {
  const router = useRouter()
  const { category } = router.query

  return <p>{category}</p>
}

export default PostList;
