import { StyledChefP } from "./PopularRestaurants.styles";
import { SpotlightSection } from "../SpotlightSection/SpotlightSection";
import { StyledSwiperSlide } from "../SpotlightSection/SpotlightSection.styles";
import { StarsRating } from "./StarsRating/StarsRating";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Card } from "../Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../../store/store"
import { useEffect } from "react";
import { getAllRestaurants } from "../../store/thunks/RestaurantThunk";

export const PopularRestaurants = () => {
  const isDesktop = useWindowWidth() >=900;
  const dispatch: AppDispatch = useDispatch();
  const { restaurants, status } = useSelector((state: RootState) => state.restaurants);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllRestaurants());
    }
    console.log(restaurants)
  }, [dispatch, status]);

  return (
    <SpotlightSection mainHeader="popular restaurant in epicure:">
      {restaurants && restaurants
        .filter((restaurant) => restaurant.isPopular)
        .map((restaurant) => (
          <StyledSwiperSlide key={restaurant.name}>
            <Card imgSrc={restaurant.imageUrl} header={restaurant.name}>
              <StyledChefP>{restaurant.chef?.name}</StyledChefP>
              {isDesktop && (
                <StarsRating rating={restaurant.stars}></StarsRating>
              )}
            </Card>
          </StyledSwiperSlide>
        ))}
    </SpotlightSection>
  );
};
