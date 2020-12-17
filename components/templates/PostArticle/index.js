import { StyledPostArticle } from "./private.PostArticle.styled";

const Post = ({ category, post, children }) => {
  if (!post) {
    return <StyledPostArticle />;
  }
  return (
    <StyledPostArticle className="markdown-body">
      <section dangerouslySetInnerHTML={{ __html: post.content }} />
    </StyledPostArticle>
  );
};

export default Post;
