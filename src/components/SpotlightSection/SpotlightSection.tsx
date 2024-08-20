import React from 'react';
import ArrowImg from "../../assets/icons/Arrow.svg";
import {
  StyledSection,
  StyledHeader,
  StyledSwiperContainer,
  StyledSwiper,
  StyledAllRestaurantsDiv,
  StyledAllRestaurantsP,
  StyledIcon,
  FadeInDivWarper,
  StyledWarper
} from "./SpotlightSection.styles";
import useWindowWidth from "../../hooks/useWindowWidth";
import "swiper/bundle";
import { Fade } from "react-awesome-reveal";

const SLIDES_PER_VIEW_DESKTOP = 3;
const SLIDES_PER_VIEW_MOBILE = 1.5;
const SLIDER_SPACE = 24;

interface SpotlightProps {
  children: React.ReactNode;
  mainHeader: string;
}

export const SpotlightSection = ({ children, mainHeader }: SpotlightProps) => {
  const isDesktop = useWindowWidth() >= 500;

  return (
    <StyledWarper className='wrapper'>
    <StyledSection>
      <Fade>
        <FadeInDivWarper>
          <StyledHeader>{mainHeader.toLocaleUpperCase()}</StyledHeader>
        </FadeInDivWarper>
      </Fade>
      <StyledSwiperContainer>
        <StyledSwiper
          slidesPerView={isDesktop ? SLIDES_PER_VIEW_DESKTOP : SLIDES_PER_VIEW_MOBILE} 
          spaceBetween={SLIDER_SPACE}// Adjust slides per view
          loop={false}
        >
          {children}
        </StyledSwiper>
      </StyledSwiperContainer>
      <StyledAllRestaurantsDiv to="/">
        <StyledAllRestaurantsP>All Restaurants</StyledAllRestaurantsP>
        <StyledIcon src={ArrowImg} />
      </StyledAllRestaurantsDiv>
    </StyledSection>
    </StyledWarper>
  );
};
