import React from 'react';
import {StyledCardContainer,StyledHeader,StyledImg, StyledContentContainer} from "./Card.styles"

interface CardProps {
  children: React.ReactNode | null; 
  imgSrc: string
  header: string
  headerFontSize?: string
}

export const Card = ({ imgSrc,header,headerFontSize, children }: CardProps) => {
  return (
    <StyledCardContainer>
      <StyledImg src={imgSrc} alt="Card image" />
      <StyledContentContainer>
        <StyledHeader headerFontSize ={headerFontSize}>{header}</StyledHeader>
        {children}
      </StyledContentContainer>
    </StyledCardContainer>
  );
};
