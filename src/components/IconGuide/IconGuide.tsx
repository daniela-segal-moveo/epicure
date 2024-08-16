import React from "react";
import {
  StyledIconGuideContainer,
  StyledIconGuidesection,
  StyledIconGuideHolder,
  StyledIconGuideHeader,
  StyledIconWarper,
  StyledIconHeader,
  StyledIcon,
  StyledSpicyIcon,
} from "./IconGuide.styles";

import vegImg from "../../assets/icons/vegan.svg";
import VegeterianImg from "../../assets/icons/Vegeterian.svg";
import spicyImg from "../../assets/icons/Spicy.svg";

export const IconGuide = () => {
  return (
    <StyledIconGuidesection>
      <StyledIconGuideContainer>
        <StyledIconGuideHeader>
          {"the meaning of our icons:".toLocaleUpperCase()}
        </StyledIconGuideHeader>
        <StyledIconGuideHolder>
          <StyledIconWarper foodIcon="spicy">
            <StyledIcon foodIcon="spicy" src={spicyImg} />
            <StyledIconHeader>Spicy</StyledIconHeader>
          </StyledIconWarper>
          <StyledIconWarper foodIcon="Vegitarian">
            <StyledIcon foodIcon= "Vegitarian" src={VegeterianImg}></StyledIcon>
            <StyledIconHeader>Vegitarian</StyledIconHeader>
          </StyledIconWarper>
          <StyledIconWarper foodIcon="veg">
            <StyledIcon foodIcon="veg" src={vegImg}></StyledIcon>
            <StyledIconHeader>Vegan</StyledIconHeader>
          </StyledIconWarper>
        </StyledIconGuideHolder>
      </StyledIconGuideContainer>
    </StyledIconGuidesection>
  );
};
