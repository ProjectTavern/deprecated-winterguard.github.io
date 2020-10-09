import { StyledPost } from './private.Post.styled'

const Post = ({ category ,children }) => {
  return (
    <StyledPost>
      <h3>{category}</h3>
      {children}
    </StyledPost>)
}

export default Post
