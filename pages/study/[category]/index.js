import { useRouter } from "next/router";

import { PostList } from "@/components/templates";

const PostListPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return <PostList category={category} />;
};

export default PostListPage;
