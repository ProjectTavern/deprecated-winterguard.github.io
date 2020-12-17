import { PostCard } from "@/components/organizations";

import {
  StyledMain,
  StyledMainList,
  StyledMainListItem,
} from "./private.Main.styled";

const Main = ({ latestPosts }) => {
  return (
    <StyledMain>
      <h2>New Posts Here !</h2>
      <StyledMainList>
        {latestPosts.map((post, index) => (
          <StyledMainListItem key={post.key}>
            <PostCard post={post} />
          </StyledMainListItem>
        ))}
      </StyledMainList>
    </StyledMain>
  );
};

export default Main;
