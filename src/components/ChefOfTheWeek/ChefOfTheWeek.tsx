import {
  StyledSection,
  StyledChefHeader,
  StyledChefProfileWarper,
  StyledImgWarper,
  StyledChefImg,
  StyledChefNameDiv,
  StyledchefName,
  StyledChefBio,
  StyledChefsRestaurantsContainer,
  StyledDesktopChefRestaurantContainer,
  StyledDesktopChefRestaurantWarper,
  StyledDesktopChefRestaurantsHeader,
} from "./ChefOfTheWeek.styles";
import { epicureData } from "../../data";
import { SpotlightSection } from "../SpotlightSection/SpotlightSection";
import { StyledSwiperSlide } from "../SpotlightSection/SpotlightSection.styles";
import { Card } from "../Card/Card";
import useWindowWidth from "../../hooks/useWindowWidth";

export const ChefOfTheWeek = () => {
  const isDesktop = useWindowWidth();
  return (
    <StyledSection>
      <StyledChefHeader>CHEF OF THE WEEK:</StyledChefHeader>
      <StyledChefProfileWarper>
        <StyledImgWarper>
          <StyledChefImg src={epicureData.chefOfTheWeek.imgUrl}></StyledChefImg>
          <StyledChefNameDiv>
            <StyledchefName>{epicureData.chefOfTheWeek.name}</StyledchefName>
          </StyledChefNameDiv>
        </StyledImgWarper>
        <StyledChefBio>{epicureData.chefOfTheWeek.bio}</StyledChefBio>
      </StyledChefProfileWarper>
      <StyledChefsRestaurantsContainer>
        {isDesktop && (
          <StyledDesktopChefRestaurantWarper>
            <StyledDesktopChefRestaurantsHeader>{`${
              epicureData.chefOfTheWeek.name.split(" ")[0]
            }'s restaurants`}</StyledDesktopChefRestaurantsHeader>
            <StyledDesktopChefRestaurantContainer>
              {epicureData.restaurants
                .filter(
                  (restaurant) =>
                    restaurant.chef === epicureData.chefOfTheWeek.name
                )
                .map((restaurant) => (
                  <Card
                    key={restaurant.name}
                    imgSrc={restaurant.imgUrl}
                    header={restaurant.name}
                  >
                    {null}
                  </Card>
                ))}
            </StyledDesktopChefRestaurantContainer>
          </StyledDesktopChefRestaurantWarper>
        )}
        {!isDesktop && (
          <SpotlightSection
            mainHeader={`${
              epicureData.chefOfTheWeek.name.split(" ")[0]
            }'s restaurants`.toLocaleUpperCase()}
          >
            {" "}
            {epicureData.restaurants
              .filter(
                (restaurant) =>
                  restaurant.chef === epicureData.chefOfTheWeek.name
              )
              .map((restaurant) => (
                <StyledSwiperSlide key={restaurant.name}>
                  <Card imgSrc={restaurant.imgUrl} header={restaurant.name}>
                    {null}
                  </Card>
                </StyledSwiperSlide>
              ))}
          </SpotlightSection>
        )}
      </StyledChefsRestaurantsContainer>
    </StyledSection>
  );
};
