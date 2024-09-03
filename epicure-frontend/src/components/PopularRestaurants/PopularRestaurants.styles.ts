import styled from "styled-components";

export const StyledChefP = styled.p`
  font-size: 24px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: 1.9700000286102295px;
  text-align: center;
  margin-top: 18px;

  @media (max-width: 800px) {
    font-size: 16px;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 1.9700000286102295px;
    text-align: left;
  }
`;

export const StyledAllRestaurantsDiv = styled.div`
  display: flex;
  width: max-content;
  height: 35px;
  margin: 20px;
  align-self: flex-end;
  cursor: pointer;

  @media (max-width: 800px) {
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
