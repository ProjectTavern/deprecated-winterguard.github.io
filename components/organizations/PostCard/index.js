import Link from "next/link";

import { StyledPostCard } from "./private.PostCard.styled";

const PostCard = ({}) => {
  return (
    <StyledPostCard>
      <div className="post-card-image-container">
        <Link href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
        </Link>
      </div>
      <div className="post-card-story">
        <h3 className="post-card-category">
          <Link href="/">Developments</Link>
        </h3>
        <h4 className="post-card-title">
          <Link href="/">Understanding Spring and Spring boot</Link>
        </h4>
      </div>
    </StyledPostCard>
  );
};

export default PostCard;
