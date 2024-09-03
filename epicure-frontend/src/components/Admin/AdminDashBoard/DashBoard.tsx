import { StyledBox, StyledContainer } from "./DashBoard.styles";
import { ChefTable } from "./ChefTable/ChefTable";
import { RestaurantTable } from "./RestaurantTable/RestaurantTable";

export const DashBoard = () => {
  return (
    <StyledBox>
      <StyledContainer>
        {/* <ChefTable/> */}
        <RestaurantTable></RestaurantTable>
      </StyledContainer>
    </StyledBox>
  );
};
