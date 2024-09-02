import { StyledBox, StyledContainer } from "./DashBoard.styles";
import { ChefTable } from "./ChefTable/ChefTable";

export const DashBoard = () => {
  return (
    <StyledBox>
      <StyledContainer>
        <ChefTable/>
      </StyledContainer>
    </StyledBox>
  );
};
