import styled, { CSSProperties, keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FadeInDivWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInDown} 1s ease-out;

  @media (max-width: 900px) {
    justify-content: unset;
    align-items: unset;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  align-self: center;

  @media (max-width: 800px) {
    align-self: auto;
    width: 100%;
  }
`;

export const StyledWarper = styled.div`
  padding-left: 127px;
  padding-right: 127px;

  @media (max-width: 1000px) {
    padding-left: 20px;
    padding-right: 0px;
  }
`;

export const StyledHeader = styled.header`
  font-family: Helvetica Neue;
  font-size: 30px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 200;
    line-height: 24px;
    letter-spacing: 1.25px;
    align-self: flex-start;
    margin-top: 0;
    margin-bottom: 8px;
  }
`;

export const StyledSwiperContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 800px) {
    margin-right: auto;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
display: flex;
`;
export const StyledSwiper = styled(Swiper)`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  .swiper-wrapper {
    display: flex;
  }
`;

export const StyledAllRestaurantsDiv = styled(Link)`
  display: flex;
  width: max-content;
  height: 35px;
  margin-top: 20px;
  align-self: flex-end;
  cursor: pointer;
  color: black;
  text-decoration: none;
  

  @media (max-width: 800px) {
    align-self: flex-start;
    margin-right: unset;
  }
`;

export const StyledAllRestaurantsP = styled.div`
  height: 35px;
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 2px;
  text-align: right;
  margin-right: 17px;
`;

export const StyledIcon = styled.img`
  display: flex;
  width: 24px;
  aspect-ratio: 1/1;
  cursor: pointer;
  top: 11px;
`;
