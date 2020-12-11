import styled from "styled-components";

const StyledPostCard = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  border: 1px solid #e6e6e6;
  height: 100%;
  min-height: 240px;

  .post_card_image__wrapper {
    flex: 1 1;
    position: relative;
    padding-top: 56.25%;
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

  .post_card_story {
    padding: 16px 16px 20px 16px;
    border-top: 1px solid #e6e6e6;
  }

  .post_card_category {
    font-size: 1rem;
    margin-bottom: 16px;
  }

  .post_card_title {
    font-size: 1.2rem;
    letter-spacing: -0.5px;
  }
`;

export { StyledPostCard };
