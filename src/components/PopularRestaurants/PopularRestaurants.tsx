import {
  StyledChefP,
} from "./PopularRestaurants.styles";
import {SpotlightSection} from "../SpotlightSection/SpotlightSection"
import {StyledSwiperSlide} from "../SpotlightSection/SpotlightSection.styles"
import { StarsRating } from "./StarsRating/StarsRating";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Card } from "../Card/Card";
import { epicureData } from "../../data";


export const PopularRestaurants = () => {
  const isDesktop = useWindowWidth();
  return (
    <SpotlightSection mainHeader="popular restaurant in epicure:">
          {epicureData.restaurants
            .filter((restaurant) => restaurant.isPopular)
            .map((restaurant) => (
              <StyledSwiperSlide key={restaurant.name}>
                <Card imgSrc={restaurant.imgUrl} header={restaurant.name}>
                  <StyledChefP>{restaurant.chef}</StyledChefP>
                  {isDesktop && (
                    <StarsRating rating={restaurant.stars}></StarsRating>
                  )}
                </Card>
              </StyledSwiperSlide>
            ))}
            </SpotlightSection>
  );
};
