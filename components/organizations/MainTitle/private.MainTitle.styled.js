import styled from "styled-components";

const StyledMainTitleLink = styled.a`
  display: block;
  padding: 40px 16px;
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
    font-size: 3.2rem;
    font-weight: bolder;
    margin-bottom: 8px;
  }
  span {
    font-size: 1.2rem;
  }
`;

export { StyledMainTitleLink, StyledHeadingTitle };
