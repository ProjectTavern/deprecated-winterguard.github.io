import { useRouter } from 'next/router'

import { Post } from '@/components/templates'

const StudyPost = () => {
  const router = useRouter()
  const { category, id } = router.query

  return (
    <Post category={category} id={id}>
      <p>{category}: {id}</p>
    </Post>
  )
}

export default StudyPost;
