import { PostCard } from "@/components/organizations";

import { StyledNews, StyledNewsMain } from "./private.News.styled";

const News = ({ children }) => {
  return (
    <StyledNews>
      <StyledNewsMain>
        <h3>Brooklyn Nine-Nine Season2 Available!</h3>
        <div className="news-main">
          <img src="https://www.thenerddaily.com/wp-content/uploads/2020/01/You-Should-Watch-Brooklyn-Nine-Nine.jpg" />
        </div>
      </StyledNewsMain>
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
