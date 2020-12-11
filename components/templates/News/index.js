import { StyledNews } from "./private.News.styled";

const News = ({ children }) => {
  return (
    <StyledNews>
      {new Array(5).fill(0).map((element, index) => (
        <div key={index}>{index}</div>
      ))}
    </StyledNews>
  );
};

export default News;
