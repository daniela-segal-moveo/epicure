import {
  StyledSection,
  StyledSectionContainer,
  StyledLogo,
  StyledGetItOnFrame,
  StyledAboutUsHeader,
  StyledAboutUsContent,
  StyledGetItOnContainer,
  StyledAboutUsContentWarper,
  StyledAboutUsHolder,
  StyledSpacer,
} from "./AboutUs.styles";

import googlePlayImg from "/assets/images/Google.svg";
import appStoreImg from "/assets/images/AppStore.svg";

import LogoImg from "/assets/images/epicureLogo.png";

export const AboutUs = () => {
  return (
    <StyledSection>
      <StyledSectionContainer>
        <StyledLogo src={LogoImg}></StyledLogo>
        <StyledAboutUsHolder>
          <StyledGetItOnContainer>
            <StyledGetItOnFrame src={googlePlayImg} />
            <StyledGetItOnFrame src={appStoreImg} />
          </StyledGetItOnContainer>
          <StyledAboutUsContentWarper>
            <StyledAboutUsHeader>
              {"about us:".toLocaleUpperCase()}
            </StyledAboutUsHeader>
            <StyledAboutUsContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
              <br />
              <StyledSpacer />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum no eu ipsum. Cras porta
              malesuada eros.
            </StyledAboutUsContent>
          </StyledAboutUsContentWarper>
        </StyledAboutUsHolder>
      </StyledSectionContainer>
    </StyledSection>
  );
};
