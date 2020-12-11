import styled from "styled-components";

const StyledNews = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    li {
      padding: 4px;
    }
  }
`;

export { StyledNews };
