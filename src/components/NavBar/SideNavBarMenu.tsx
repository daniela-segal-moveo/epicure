import {
  StyledDrawerContainer,
  StyledOverlay,
  StyledHamburger,
  StyledDivider,
  StyledTabWarper
} from "../NavBar/NavBar.styles";

import {TabLinks} from "./TabLinks"

import CloseIcon from "../../assets/icons/CloseIcon.svg"

interface NavBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const SideNavBarMenu = ({ open, setOpen }: NavBarProps) => {
  return (
    <>
      <StyledDrawerContainer open={open}>
        <StyledHamburger src = {CloseIcon} onClick={() => setOpen(false)}></StyledHamburger>
        <StyledTabWarper><TabLinks/></StyledTabWarper>
        <StyledDivider/>
      </StyledDrawerContainer>
      <StyledOverlay open={open} onClick={() => setOpen(false)} />
    </>
  );
};
