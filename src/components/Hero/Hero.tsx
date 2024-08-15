import {
  StyledHeroContainer,
  StyledHeroImg,
  StyledHeroHeader,
  StyledSearchContainer,
  StyledSearchBar,
} from "./Hero.styles";

import { epicureData } from "../../data";

export const Hero = () => {
  return (
    <StyledHeroContainer className="herocontainer">
    <StyledHeroImg src={epicureData.hero.pictureUrl}/>
    <StyledSearchContainer>
      <StyledHeroHeader>{epicureData.hero.header}</StyledHeroHeader>
      <StyledSearchBar placeholder={epicureData.hero.searchBarText} />
    </StyledSearchContainer>
  </StyledHeroContainer>)
};
