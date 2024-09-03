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
  //   StyledSwiperSlide
} from "./ChefOfTheWeek.styles";
import { SpotlightSection } from "../SpotlightSection/SpotlightSection";
import { Card } from "../Card/Card";
import useWindowWidth from "../../hooks/useWindowWidth";
import { StyledSwiperSlide } from "../SpotlightSection/SpotlightSection.styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getWeekChef } from "../../store/thunks/ChefThunk";

export const ChefOfTheWeek = () => {
  const isDesktop = useWindowWidth() >= 900;
  const dispatch: AppDispatch = useDispatch();
  const { weekChef, status } = useSelector((state: RootState) => state.chefs);

  useEffect(() => {
    if (status == "idle") {
      dispatch(getWeekChef());
    }
  }, []);
  return (
    <StyledSection>
      <StyledChefHeader>CHEF OF THE WEEK:</StyledChefHeader>
      <StyledChefProfileWarper>
        <StyledImgWarper>
          <StyledChefImg src={weekChef?.imageUrl}></StyledChefImg>
          <StyledChefNameDiv>
            <StyledchefName>{weekChef?.name}</StyledchefName>
          </StyledChefNameDiv>
        </StyledImgWarper>
        <StyledChefBio>{weekChef?.bio}</StyledChefBio>
      </StyledChefProfileWarper>
      <StyledChefsRestaurantsContainer>
        {isDesktop && (
          <StyledDesktopChefRestaurantWarper>
            <StyledDesktopChefRestaurantsHeader>{`${
              weekChef?.name.split(" ")[0]
            }'s restaurants`}</StyledDesktopChefRestaurantsHeader>
            <StyledDesktopChefRestaurantContainer>
              {weekChef?.restaurants.map((restaurant) => (
                <Card
                  key={restaurant.name}
                  imgSrc={restaurant.imageUrl}
                  header={restaurant.name}
                  headerFontSize="30px"
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
              weekChef?.name.split(" ")[0]
            }'s restaurants`.toLocaleUpperCase()}
          >
            {" "}
            {weekChef?.restaurants.map((restaurant) => (
              <StyledSwiperSlide key={restaurant.name}>
                <Card imgSrc={restaurant.imageUrl} header={restaurant.name}>
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
