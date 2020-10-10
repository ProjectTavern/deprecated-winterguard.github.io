import { StyledPost } from './private.Post.styled'

const Post = ({ category ,children }) => {
  return (
    <StyledPost>
      <h2>{category}</h2>
      {children}
    </StyledPost>)
}

export default Post
