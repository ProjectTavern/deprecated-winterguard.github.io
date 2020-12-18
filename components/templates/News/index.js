import { PostCard } from "@/components/organizations";

import { StyledNews, StyledNewsMain } from "./private.News.styled";

const News = ({ newsPosts }) => {
  return (
    <StyledNews>
      <StyledNewsMain>
        <h3>Brooklyn Nine-Nine Season2 Available!</h3>
        <div className="news-main">
          <img src="https://www.thenerddaily.com/wp-content/uploads/2020/01/You-Should-Watch-Brooklyn-Nine-Nine.jpg" />
        </div>
      </StyledNewsMain>
      <ul>
        {newsPosts.posts.map((newsPost, index) => (
          <li key={index}>
            <PostCard post={newsPost} />
          </li>
        ))}
      </ul>
      <button>More</button>
    </StyledNews>
  );
};

export default News;
