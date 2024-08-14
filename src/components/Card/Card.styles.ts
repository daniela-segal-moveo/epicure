import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f4ea;
  width: 379px;
  min-height: 234px;

  @media (max-width: 480px) {
    width: 245px;
    justify-content: unset;
    align-items: unset;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 235px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 152px;
  }
`;
export const StyledContentContainer = styled.div`
  text-align: left;
  @media (max-width: 480px) {
    margin: 16px;
  }
`;
export const StyledHeader = styled.p`
  font-family: Helvetica Neue;
  font-size: 40px;
  font-weight: 400;
  line-height: 47px;
  letter-spacing: 2.6700000762939453px;
  text-align: center;
  margin:0;
  margin-top: 18px;

  @media (max-width: 480px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 21.47px;
    letter-spacing: 2.6700000762939453px;
    text-align: left;
  }
`;
