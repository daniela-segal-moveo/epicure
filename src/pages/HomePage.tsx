import { StyledDefultPageContainer } from "./pages.styles";
import { Hero } from "../components/Hero/Hero";
import { PopularRestaurants } from "../components/PopularRestaurants/PopularRestaurants";
import { SignatureDish } from "../components/SignatureDish/SignatureDish";
import { IconGuide } from "../components/IconGuide/IconGuide";
import { ChefOfTheWeek } from "../components/ChefOfTheWeek/ChefOfTheWeek";

export const HomePage = () => {
  return (
    <StyledDefultPageContainer>
      <Hero></Hero>
      <PopularRestaurants />
      <SignatureDish></SignatureDish>
      <IconGuide/>
      <ChefOfTheWeek></ChefOfTheWeek>
    </StyledDefultPageContainer>
  );
};
