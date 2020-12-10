import {
  StyledDevelopments,
  StyledDevelopmentsList,
  StyledDevelopmentsCard,
} from "./private.Developments.styled";

const Developments = () => {
  return (
    <StyledDevelopments>
      <StyledDevelopmentsList>
        {new Array(5).fill(1).map((element, index) => (
          <StyledDevelopmentsCard key={index}>
            <span className="development_card_image__wrapper">
              <img src="" />
            </span>
          </StyledDevelopmentsCard>
        ))}
      </StyledDevelopmentsList>
    </StyledDevelopments>
  );
};

export default Developments;
