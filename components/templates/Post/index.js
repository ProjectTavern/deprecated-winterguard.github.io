import { StyledPost } from "./private.Post.styled";

const Post = ({ category, post, children }) => {
  return (
    <StyledPost>
      <h2>{category}</h2>
      <section dangerouslySetInnerHTML={{ __html: post.content }} />
    </StyledPost>
  );
};

export default Post;
