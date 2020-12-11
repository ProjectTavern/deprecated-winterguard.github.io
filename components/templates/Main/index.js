import Link from "next/link";

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
            <div className="main_card_image__wrapper">
              <Link href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
              </Link>
            </div>
            <div className="main_card_story">
              <h3 className="main_card_category">
                <Link href="/">Developments</Link>
              </h3>
              <h4 className="main_card_title">
                <Link href="/">Understanding Spring and Spring boot</Link>
              </h4>
            </div>
          </StyledMainCard>
        ))}
      </StyledMainList>
    </StyledMain>
  );
};

export default Main;
