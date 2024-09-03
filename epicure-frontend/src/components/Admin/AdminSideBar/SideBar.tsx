import {
  StyledDrawer,
  StyledToolbar,
  StyledLogo,
  StyledButtonGroup,
  StyledButton,
  StyledLogOutButton,
} from "./SideBar.styles";
import { Typography } from "@mui/material";
import epicureLogo from "../../../../public/assets/images/epicureLogo.png";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import Face2Icon from "@mui/icons-material/Face2";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const SideBar = () => {
  return (
    <StyledDrawer variant="permanent">
      <StyledToolbar>
        <StyledLogo src={epicureLogo} />
        <Typography sx={{ fontFamily: "admin-font" }}>Epicure Admin</Typography>
      </StyledToolbar>
      <StyledButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="text"
      >
        <StyledButton startIcon={<Face2Icon />}>Chefs</StyledButton>
        <StyledButton startIcon={<RamenDiningIcon />}>Dishes</StyledButton>
        <StyledButton startIcon={<RestaurantIcon />}>Restaurants</StyledButton>
      </StyledButtonGroup>
      <StyledLogOutButton>Log Out</StyledLogOutButton>
    </StyledDrawer>
  );
};
