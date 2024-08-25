import {
  StyledDrawerContainer,
  StyledOverlay,
  StyledCloseButton,
  StyledDivider,
  StyledTabWarper,
} from "../NavBar/NavBar.styles";

import { TabLinks } from "./TabLinks";
import { Footer } from "../Footer/Footer";
import CloseIcon from "../../assets/icons/CloseIcon.svg";

interface NavBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const SideNavBarMenu = ({ open, setOpen }: NavBarProps) => {
  return (
    <>
      <StyledDrawerContainer open={open}>
        <StyledCloseButton
          src={CloseIcon}
          onClick={() => setOpen(false)}
        ></StyledCloseButton>
        <StyledTabWarper>
          <TabLinks />
        </StyledTabWarper>
        <StyledDivider />
        <Footer />
      </StyledDrawerContainer>
      <StyledOverlay open={open} onClick={() => setOpen(false)} />
    </>
  );
};
