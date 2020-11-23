import styled from "styled-components";

const StyledMainTitleLink = styled.a`
  display: block;
  padding: 18px 16px;
  background: #ea1717;
  color: #fff;
  text-decoration: none;
`;

const StyledHeadingTitle = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;

  em {
    font-size: 1.8rem;
    font-weight: bolder;
    margin-bottom: 8px;
  }

  span {
    font-size: 0.8rem;
  }
`;

export { StyledMainTitleLink, StyledHeadingTitle };
