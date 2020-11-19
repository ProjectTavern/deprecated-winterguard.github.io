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
            <PostItem key={post.content} post={post}>
              {post.title}
            </PostItem>
          )
      )}
    </StyledPostList>
  );
};

export default Post;
