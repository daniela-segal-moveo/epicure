import styled from "styled-components";

export const StyledIngredientsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 123px;
  gap: 0px;
  opacity: 0px;
  padding-left: 42px;
  padding-right: 42px;
  margin-bottom: 18px;

  @media (max-width: 480px) {
    margin-top: 8px;
    padding: unset;
    margin-bottom: 0;
    height: 100px;
  }
`;

export const StyledIngredients = styled.p`
  font-size: 24px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: 1.9700000286102295px;
  text-align: center;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 16px;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 1.9700000286102295px;
    text-align: left;
  }
`;

export const StyledDishPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    width: max-content;
  }
`;

export const StyledDishPrice = styled.p`
  font-family: Helvetica Neue;
  font-size: 24px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: 1.9700000286102295px;
  text-align: center;
  margin: 0;

  @media (max-width: 480px) {
    font-family: Helvetica Neue;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 1.9700000286102295px;
    text-align: left;
  }
`;

export const StyledDishPriceDiv = styled.div`
  display: flex;
  height: 30px;
  align-items: flex-end;
`;

export const StyledIlsIcon = styled.img`
  width: 14px;
  height: 19px;
  gap: 0px;
  opacity: 0px;
  @media (max-width: 480px) {
    margin-right: 8px;
    width: 8.11px;
    margin-top: 4px;
    height: 11px;
  }
`;

export const StyledGreyLine = styled.div`
  width: 112px;
  height: 0px;
  gap: 0px;
  margin-left: 8px;
  margin-right: 8px;
  border: 0.5px 0px 0px 0px;
  opacity: 0px;
  border: 0.5px solid #979797;
`;
