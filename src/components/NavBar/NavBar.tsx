import {
  StyledNavBarContainer,
  StyledIconsContainer,
  StyledLogo,
  StyledIcon,
} from "../NavBar/NavBar.styles";

import { SideNavBarMenu } from "./SideNavBarMenu";

import LogoImg from "../../assets/images/epicureLogo.png";
import DesktopLogoImg from "../../assets/images/logo.svg";
import PersonIcon from "../../assets/icons/Person.svg";
import SearchIcon from "../../assets/icons/Search.svg";
import BagIcon from "../../assets/icons/Bag.svg";
import HamburSvg from "../../assets/icons/HAMBUR.svg";
import { useEffect, useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import { TabLinks } from "./TabLinks";

export const NavBar = () => {
  const [navHamburOpen, setHamburOpen] = useState<boolean>(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    console.log(navHamburOpen);
  }, [navHamburOpen]);

  return (
    <>
      <StyledNavBarContainer>
        <StyledIcon
          src={HamburSvg}
          isHamburger
          onClick={() => setHamburOpen(true)}
          isDesktop={windowWidth}
        ></StyledIcon>
        <StyledLogo
          src={windowWidth ? DesktopLogoImg: LogoImg}
        ></StyledLogo>
        {windowWidth && <TabLinks />}
        <StyledIconsContainer>
          <StyledIcon src={SearchIcon}></StyledIcon>
          <StyledIcon src={PersonIcon}></StyledIcon>
          <StyledIcon src={BagIcon}></StyledIcon>
        </StyledIconsContainer>
      </StyledNavBarContainer>
      <SideNavBarMenu
        open={navHamburOpen}
        setOpen={setHamburOpen}
      ></SideNavBarMenu>
    </>
  );
};
