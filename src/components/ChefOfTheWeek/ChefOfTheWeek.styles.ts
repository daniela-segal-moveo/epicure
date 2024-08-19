import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSection = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  margin: 127.5px;
  margin-top: 80px;

  @media (max-width: 1000px) {
    margin: 0px;
    margin-top: 48px;
  }
`;

export const StyledChefHeader = styled.p`
  font-size: 30px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: center;

  @media (max-width: 1000px) {
    margin-bottom: 16px;
    font-size: 18px;
    text-align: left;
    margin-bottom: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const StyledChefProfileWarper = styled.div`
  display: flex;
  height: 372px;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: unset;
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const StyledImgWarper = styled.div`
  display: flex;
  position: relative;
  width: 478px;
  height: 372px;
  gap: 0px;
  opacity: 0px;

  @media (max-width: 1000px) {
    width: 478px;
    height: 372px;
  }

  @media (max-width: 480px) {
    height: 262px;
    width: 100%;
  }
`;

export const StyledChefImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledChefNameDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 78px;
  background: #ffffffcc;
  opacity: 80%;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    height: 51px;
  }
`;

export const StyledchefName = styled.p`
  font-family: Helvetica Neue;
  font-size: 40px;
  font-weight: 400;
  line-height: 47px;
  letter-spacing: 2.6700000762939453px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 2.6700000762939453px;
  }
`;

export const StyledChefBio = styled.p`
  font-size: 24px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: justified;
  margin-left: 63.5px;
  width: 642px;
  @media (max-width: 1000px) {
    margin-left: auto;
    width: auto;
    font-size: 18px;
    font-weight: 200;
    line-height: 28px;
    letter-spacing: 1.25px;
  }
`;

export const StyledChefsRestaurantsContainer = styled.div`
  align-self: flex-start;
  @media (max-width: 480px) {
  }
`;

export const StyledDesktopChefRestaurantWarper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 725px;
  height: 432px;
  opacity: 0px;
  margin-top: 45px;
`;
export const StyledDesktopChefRestaurantsHeader = styled.p`
  font-family: Helvetica Neue;
  font-size: 30px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: left;
  margin: 0px;
`;

export const StyledDesktopChefRestaurantContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
display: flex;
 width: 100% !important;
justify-content: center;
align-items: center; 
`;
