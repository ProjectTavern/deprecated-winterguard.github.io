import { StyledPostArticle } from "./private.PostArticle.styled";

const Post = ({ category, post, children }) => {
  return (
    <StyledPostArticle className="markdown-body">
      <section dangerouslySetInnerHTML={{ __html: post.content }} />
    </StyledPostArticle>
  );
};

export default Post;
