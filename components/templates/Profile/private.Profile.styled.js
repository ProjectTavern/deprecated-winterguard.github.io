import styled from "styled-components";

const StyledProfile = styled.article`
  width: 100%;
  text-align: center;
  h2 {
    font-size: 3rem;
    text-decoration: underline;
    margin-bottom: 1rem;
  }
`;

const StyledSkillSection = styled.section`
  width: 100%;
  text-align: center;

  ul {
  }

  li {
    display: grid;
    width: 100%;
    grid-template-areas:
      "image skill_name skill_name"
      "image skill_level skill_level"
      "image skill_type skill_type";
    grid-template-columns: 100px;
    div:nth-child(1) {
      grid-area: image;
      height: 100px;
    }
    strong {
      grid-area: skill_name;
    }
    em {
      grid-area: skill_type;
    }
    i {
      grid-area: skill_level;
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export { StyledProfile, StyledSkillSection };
