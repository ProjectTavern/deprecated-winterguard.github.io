import {
  StyledPostItem, StyledPostTitle, StyledPostDate
} from "./private.PostItem.styled";

const PostItem = ({ children, post }) => {
  return (
    <StyledPostItem>
      <StyledPostTitle>{children}</StyledPostTitle>
      <StyledPostDate>
        {post.writtenAt}
      </StyledPostDate>
    </StyledPostItem>
  );
};

export default PostItem;
