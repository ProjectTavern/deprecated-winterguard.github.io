import styled from "styled-components";

const StyledPostCard = styled.section`
  display: flex;
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
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .post-card-story {
    padding: 16px 16px 20px 16px;
    border-top: 1px solid #e6e6e6;
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
