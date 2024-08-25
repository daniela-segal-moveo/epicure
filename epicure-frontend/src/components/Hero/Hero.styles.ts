import styled, { keyframes } from "styled-components";
import searchIcon from "../../assets/icons/Search.svg";

export const StyledHeroContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 696px;
  gap: 0px;
  opacity: 0px;

  @media (max-width: 800px) {
    height: 273px;
  }
`;

export const StyledHeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 776px;
  height: 221px;
  background: #ffffffe0;
  opacity: 88%;
  gap: 18px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 800px) {
    height: 144px;
    width: 335px;
  }
`;

export const StyledHeroHeader = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica Neue;
  margin: 0;
  letter-spacing: 1.9700000286102295px;
  width: 404px;
  gap: 0px;
  opacity: 0px;
  font-family: Helvetica Neue;
  font-size: 32px;
  font-weight: 200;
  line-height: 40px;
  letter-spacing: 1.9700000286102295px;
  text-align: left;

  @media (max-width: 800px) {
    height: 64px;
    width: 317px;
    font-size: 24px;
    font-weight: 200;
    line-height: 32px;
    letter-spacing: 1.9700000286102295px;
    text-align: left;
  }
`;

export const StyledSearchBar = styled.input`
  display: flex;
  width: 505px;
  height: 48px;
  gap: 8px;
  border-radius: 4px 0px 0px 0px;
  border: 0.5px solid #000000;
  opacity: 0px;
  background: url(${searchIcon}) no-repeat right;
  background-position: left 10px center;
  background-size: 32px;
  text-align: center;
  font-size: 24px;
  font-weight: 200;
  line-height: 29.02px;
  letter-spacing: 1.2899999618530273px;
  font-family: Helvetica Neue;
  &::placeholder {
    font-family: Helvetica Neue;
    font-size: 24px;
    font-weight: 200;
    line-height: 29.02px;
    letter-spacing: 1.2899999618530273px;
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 315px;
    height: 30px;
    background-size: 12px;
    font-family: Helvetica Neue;
    font-size: 12px;
    font-weight: 200;
    line-height: 14.51px;
    letter-spacing: 1.2899999618530273px;
    text-align: center;

    &::placeholder {
      font-family: Helvetica Neue;
      font-size: 12px;
      font-weight: 200;
      line-height: 14.51px;
      letter-spacing: 1.2899999618530273px;
      text-align: center;
    }
  }
`;

const fadeInFlipInX = keyframes`
   0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const FlipInDiv = styled.div`
  animation: ${fadeInFlipInX} 1s ease-out;
`;
