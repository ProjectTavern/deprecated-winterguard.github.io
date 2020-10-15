import {
  StyledPostList,
} from "./private.PostList.styled";

import { PostItem } from "@/components/organizations";

const Post = ({ posts = [] }) => {
  return (
    <StyledPostList>
      {posts.map(
        post =>
          (
            <PostItem post={post}>{post.title}</PostItem>
          )
      )}
    </StyledPostList>
  );
};

export default Post;
