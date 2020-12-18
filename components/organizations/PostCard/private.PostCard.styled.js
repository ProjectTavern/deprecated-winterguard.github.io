import styled from "styled-components";

const StyledPostCard = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  height: 100%;
  min-height: 240px;

  .post-card-image-container {
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .post-card-story {
    position: absolute;
    bottom: 0;
    padding: 16px 16px 20px 16px;
    text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
  }

  .post-card-category {
    font-size: 1rem;
    margin-bottom: 16px;
  }

  .post-card-title {
    font-size: 1.2rem;
    letter-spacing: -0.5px;
  }
`;

export { StyledPostCard };
