import styled from "styled-components";

const StyledProfile = styled.article`
  h2 {
    font-size: 3rem;
    text-decoration: underline;
    margin-bottom: 1rem;
  }
`;

const StyledSkillSection = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem;
  }

  img {
    display: block;
    width: 100%;
    margin-bottom: 1.6rem;
  }
`;

export { StyledProfile, StyledSkillSection };
