import Link from "next/link";

import { StyledPostCard } from "./private.PostCard.styled";

const PostCard = ({}) => {
  return (
    <StyledPostCard>
      <div className="post_card_image__wrapper">
        <Link href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
        </Link>
      </div>
      <div className="post_card_story">
        <h3 className="post_card_category">
          <Link href="/">Developments</Link>
        </h3>
        <h4 className="post_card_title">
          <Link href="/">Understanding Spring and Spring boot</Link>
        </h4>
      </div>
    </StyledPostCard>
  );
};

export default PostCard;
