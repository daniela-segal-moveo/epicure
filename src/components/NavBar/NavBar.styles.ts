import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBarContainer = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 64px;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 480px) {
    height: 46px;
    justify-content: space-between;
  }
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  position: absolute;
  right: 127px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 480px) {
    position: absolute;
    right: 20px;
  }
`;

export const StyledTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 46px;
    height: 146px;
    left: 18px;
    padding: 0%;
    gap: 40px;
    opacity: 0px;
  }
`;

export const StyledTabWarper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 46px;
  margin-left: 20px;
  height: 148px;
`;

export const StyledTabLink = styled(Link)`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 21.76px;
  letter-spacing: 1.9199999570846558px;
  text-align: left;
  color: #000000;
  text-decoration: none;
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 0px;
  top: 294px;
  left: 282px;
  gap: 0px;
  opacity: 0px;
  border: 1px solid #f2f2f2;
`;

export const StyledLogo = styled.img`
  display: flex;
  width: "162px";
  height: 32px;
  top: 7px;
  gap: 0px;
  opacity: 0px;
  margin: 14px;
  margin-left: 127px;

  @media (max-width: 480px) {
    margin: 0px;
    align-self: center;
    justify-self: center;
    position: absolute;
    left: 50%;
    width: 32.93px;
    transform: translateX(-100%);
  }
`;

export const StyledIcon = styled.img`
  display: flex;
  width: 20px;
  aspect-ratio: 1/1;
  cursor: pointer;
  top: 11px;
`;

export const StyledHamburger = styled.img`
  display: flex;
  width: 24px;
  position: absolute;
  left: 20px;
  aspect-ratio: 1/1;
  cursor: pointer;
  top: 11px;
`;

export const StyledDrawerContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 413px;
  left: -1px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;

  background-color: white;
  color: black;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

export const StyledOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${(props) => (props.open ? "auto" : "none")};
  z-index: 999;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: black;
  font-size: 24px;
  cursor: pointer;
`;
