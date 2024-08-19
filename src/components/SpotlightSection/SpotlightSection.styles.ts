import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSection = styled.section`
  display: flex;
  width: 1185px;
  flex-direction: column;
  margin-top: 48px;
  align-self: center;

  @media (max-width: 480px) {
    align-self: auto;
    width: auto;
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

  @media (max-width: 480px) {
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 200;
    line-height: 24px;
    letter-spacing: 1.25px;
    align-self: flex-start;
    margin: 29px;
    margin-left: 20px;
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

  @media (max-width: 480px) {
    margin-left: 20px;
    margin-right: auto;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: max-content !important;
`;
export const StyledSwiper = styled(Swiper)`
  display: flex;
  justify-content: flex-start !important;

  .swiper-wrapper {
    display: flex;
  }
`;

export const StyledAllRestaurantsDiv = styled.div`
  display: flex;
  width: max-content;
  height: 35px;
  margin: 20px;
  align-self: flex-end;
  cursor: pointer;

  @media (max-width: 480px) {
    align-self: flex-start;
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
