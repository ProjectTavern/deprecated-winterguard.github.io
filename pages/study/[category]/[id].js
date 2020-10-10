import { useRouter } from 'next/router'

import { Post } from '@/components/templates'

const StudyPost = () => {
  const router = useRouter()
  const { category, id } = router.query

  return (
    <Post category={category} id={id}>
      <h3></h3>
    </Post>
  )
}

export default StudyPost;
