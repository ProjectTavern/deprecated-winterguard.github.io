import styled from "styled-components";

const StyledPostArticle = styled.article`
  width: 100%;
  font-size: 1.6rem;

  > section > ol,
  > section > ul {
    padding-left: 0;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export { StyledPostArticle };
