import {
  StyledPostListContainer,
  StyledPostList,
} from "./private.PostList.styled";

import { PostItem } from "@/components/organizations";

const Post = ({ category }) => {
  return (
    <StyledPostListContainer>
      <h2>{category}</h2>
      <StyledPostList>
        <PostItem>1</PostItem>
        <PostItem>2</PostItem>
      </StyledPostList>
    </StyledPostListContainer>
  );
};

export default Post;
