import { PostCard } from "@/components/organizations";

import { StyledNews } from "./private.News.styled";

const News = ({ children }) => {
  return (
    <StyledNews>
      <ul>
        {new Array(5).fill(0).map((element, index) => (
          <li key={index}>
            <PostCard />
          </li>
        ))}
      </ul>
    </StyledNews>
  );
};

export default News;
