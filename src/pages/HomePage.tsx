import { StyledDefultPageContainer } from "./pages.styles";
import { Hero } from "../components/Hero/Hero";
import { PopularRestaurants } from "../components/PopularRestaurants/PopularRestaurants";

export const HomePage = () => {
  return (
    <StyledDefultPageContainer>
      <Hero></Hero>
      <PopularRestaurants />
    </StyledDefultPageContainer>
  );
};
