import {
  StyledDrawerContainer,
  StyledOverlay,
  StyledIcon,
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
        <StyledIcon src = {CloseIcon} isHamburger onClick={() => setOpen(false)}></StyledIcon>
        <StyledTabWarper><TabLinks/></StyledTabWarper>
        <StyledDivider/>
      </StyledDrawerContainer>
      <StyledOverlay open={open} onClick={() => setOpen(false)} />
    </>
  );
};
