import React from 'react';
import {StyledCardContainer,StyledHeader,StyledImg, StyledContentContainer} from "./Card.styles"

interface CardProps {
  children: React.ReactNode; 
  imgSrc: string
  header: string
}

export const Card = ({ imgSrc,header, children }: CardProps) => {
  return (
    <StyledCardContainer>
      <StyledImg src={imgSrc} alt="Card image" />
      <StyledContentContainer>
        <StyledHeader>{header}</StyledHeader>
        {children}
      </StyledContentContainer>
    </StyledCardContainer>
  );
};
