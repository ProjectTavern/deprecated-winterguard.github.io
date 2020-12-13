import { PostCard } from "@/components/organizations";

import {
  StyledMain,
  StyledMainList,
  StyledMainListItem,
} from "./private.Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <h2>New Posts Here !</h2>
      <StyledMainList>
        {new Array(7).fill(1).map((element, index) => (
          <StyledMainListItem key={index}>
            <PostCard />
          </StyledMainListItem>
        ))}
      </StyledMainList>
    </StyledMain>
  );
};

export default Main;
