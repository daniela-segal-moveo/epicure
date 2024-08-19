import styled from "styled-components";

export const StyledIconGuidesection = styled.section`
  width: 1, 440px;
  height: 265px;
  opacity: 0px;
  background: #fafafa;
  margin-top: 10px;

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center !important;
    margin-top: 46px;
    background: #fafafa;
    height: 584px;
  }
`;
export const StyledIconGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  @media (max-width: 480px) {
    padding: 0px;
    gap: 0px;
    opacity: 0px;
  }
`;

export const StyledIconGuideHeader = styled.div`
  font-size: 30px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 2.140000104904175px;
  text-align: center;
  margin-top: 35px;

  @media (max-width: 480px) {
    margin-top: 24px;
    font-size: 18px;
    font-weight: 200;
    line-height: 35px;
    letter-spacing: 1.25px;
  }
`;

export const StyledIconGuideHolder = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 35px;
  @media (max-width: 480px) {
    display: flex;
    margin-top: -24px;
    flex-direction: column;
    margin-bottom: unset;
  }
`;

export const StyledIconWarper = styled.div<{ foodIcon: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  width: 136px;
  height: 127px;
  opacity: 0px;

  @media (max-width: 480px){
    height: ${(props) => (props.foodIcon === "spicy" ? "102px" : "127px")};
    margin-top: 56px;
  }
`;

export const StyledIcon = styled.img<{ foodIcon: string }>`
  width:  77.42px;
  height: 60px;
  padding: 1.94px 9.99px 1.79px 11.61px;
  gap: 0px;
  opacity: 0px;

  @media (max-width: 480px) {
    width: ${(props) => (props.foodIcon === "spicy" ? "46.42px" : "77.42px")};
  height: ${(props) => (props.foodIcon === "spicy" ? "34.44px" : "60px")};
  }
`;

export const StyledIconHeader = styled.p`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: 1.9700000286102295px;
  text-align: center;
  margin: 0;
`;
