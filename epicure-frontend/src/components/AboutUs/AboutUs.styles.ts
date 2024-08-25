import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  width: 100%;
  background: #fafafa;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 24px;
  padding-bottom: 48px;
  margin-top: 90px;

  @media (max-width: 900px) {
    margin-top: 60px;
  }
`;

export const StyledSectionContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-left: 132px;
  padding-right: 132px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    padding-left: 0;
    justify-content: unset;
    align-items: unset;
  }
`;

export const StyledLogo = styled.img`
  width: 178.22px;
  height: 166px;
  gap: 0px;
  opacity: 0px;

  @media (max-width: 900px) {
    width: 102px;
    height: 95px;
  }
`;

export const StyledAboutUsHolder = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledGetItOnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
  height: 120px;
  gap: 16px;
  opacity: 0px;
  margin-top: 32px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledGetItOnFrame = styled.img`
  width: Hug (180px) px;
  height: Hug (52px) px;
  cursor: pointer;
`;

export const StyledAboutUsContentWarper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledAboutUsHeader = styled.p`
  font-family: Helvetica Neue;
  font-size: 30px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 2.140000104904175px;
  text-align: left;
  margin-bottom: 16px;

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 1.25px;
    margin-top: 45px;
    margin-bottom: 0px;
  }
`;
export const StyledAboutUsContent = styled.p`
  font-size: 20px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: 2.140000104904175px;
  text-align: left;
  width: 569px;

  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 28px;
    width: unset;
  }
`;

export const StyledSpacer = styled.br`
  @media (max-width: 900px) {
    display: none;
  }
`;
