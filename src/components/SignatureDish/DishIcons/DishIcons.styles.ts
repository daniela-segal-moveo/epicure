import styled from "styled-components";

export const StyledFoodIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 18px;
  margin-top: 8px;

  @media (max-width: 800px) {
    justify-content: unset;
    align-items: unset;
    margin-bottom: unset;
  }
`;

export const StyledIcon = styled.img`
  display: flex;
  width: 39.76px;
  gap: 0px;
  opacity: 0px;
  aspect-ratio: 1/1;
  cursor: pointer;
  top: 11px;
  margin-right: 5px;

  @media (max-width: 800px) {
    width: 24px;
  }
`;
