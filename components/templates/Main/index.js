import {
  StyledMain,
  StyledMainList,
  StyledMainCard,
} from "./private.Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <h2>Here comes the New Posts</h2>
      <StyledMainList>
        {new Array(5).fill(1).map((element, index) => (
          <StyledMainCard key={index}>
            <span className="main_card_image__wrapper">
              <img src="" />
            </span>
            <div className="main_card_story">
              <strong className="main_card_title"></strong>
              <span className="main_card_contents"></span>
            </div>
          </StyledMainCard>
        ))}
      </StyledMainList>
    </StyledMain>
  );
};

export default Main;
