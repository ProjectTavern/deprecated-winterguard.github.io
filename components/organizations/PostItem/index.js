import { StyledPostItem } from "./private.PostItem.styled";

const PostItem = ({ children, post }) => {
  return (
    <StyledPostItem>
      {children}
    </StyledPostItem>
  );
};

export default PostItem;
