import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooterWarper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 20px;
  height: 85px;
  justify-content: center;

  @media (max-width: 800px) {
    justify-content: flex-start;
    height: 202px;
    margin-bottom: 20px;
  }
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 85px;
  top: 227px;
  left: 18px;
  gap: 40px;
  opacity: 0px;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 146px;
    align-items: baseline;
  }
`;

export const StyledFooterLink = styled(Link)`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 21.76px;
  letter-spacing: 1.9199999570846558px;
  text-align: left;
  color: #000000;
  text-decoration: none;
`;
