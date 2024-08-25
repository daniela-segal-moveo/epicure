import {
  StyledHeroContainer,
  StyledHeroImg,
  StyledHeroHeader,
  StyledSearchContainer,
  StyledSearchBar,
  FlipInDiv,
} from "./Hero.styles";
import { Fade } from "react-awesome-reveal";

import { epicureData } from "../../data";

export const Hero = () => {
  return (
    <Fade>
      <FlipInDiv>
        <StyledHeroContainer className="herocontainer">
          <StyledHeroImg src={epicureData.hero.pictureUrl} />
          <StyledSearchContainer>
            <StyledHeroHeader>{epicureData.hero.header}</StyledHeroHeader>
            <StyledSearchBar placeholder={epicureData.hero.searchBarText} />
          </StyledSearchContainer>
        </StyledHeroContainer>
      </FlipInDiv>
    </Fade>
  );
};
