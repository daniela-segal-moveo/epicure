import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #f9f4ea;
  width: 379px;
  min-height: 357px;

  @media (max-width: 900px) {
    width: 245px;
    min-height: 234px;
    justify-content: unset;
    align-items: unset;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 235px;
  object-fit: cover;

  @media (max-width: 800px) {
    height: 152px;
  }
`;
export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  @media (max-width: 800px) {
    align-items: unset;
    margin: 16px;
  }
`;
export const StyledHeader = styled.p.withConfig({
    shouldForwardProp: (prop) => prop !== "headerFontSize",
  })<{ headerFontSize: string | undefined}>`
  font-family: Helvetica Neue;
  font-size: ${(props) => (props.headerFontSize ? props.headerFontSize : "40px")};
  font-weight: 400;
  line-height: 47px;
  letter-spacing: 2.6700000762939453px;
  text-align: center;
  margin: 0;
  margin-top: 18px;
  width: 194px;

  @media (max-width: 800px) {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.47px;
    letter-spacing: 2.6700000762939453px;
    text-align: left;
  }
`;
