import Link from 'next/link'

import {
  StyledPostItem, StyledPostTitle, StyledPostDate
} from "./private.PostItem.styled";

const PostItem = ({ children, post }) => {
  return (
    <StyledPostItem>
      <Link href={post.slug + '.md'}>
        <StyledPostTitle>{children}</StyledPostTitle>
      </Link>
      <StyledPostDate>
        {post.writtenAt}
      </StyledPostDate>
    </StyledPostItem>
  );
};

export default PostItem;
