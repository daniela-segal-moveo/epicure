
import ArrowImg from "../../assets/icons/Arrow.svg";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Card } from "../Card/Card";
import { epicureData } from "../../data";
import {
  StyledSection,
  StyledHeader,
  StyledSwiperContainer,
  StyledSwiper,
  StyledSwiperSlide,
  StyledAllRestaurantsDiv,
  StyledAllRestaurantsP,
  StyledIcon,
  StyledChefP
} from "./PopularRestaurants.styles";
import { StarsRating } from "./StarsRating/StarsRating";
import useWindowWidth from "../../hooks/useWindowWidth";

const SLIDES_PER_VIEW_DESKTPOP = 3
const SLIDES_PER_VIEW_MOBILE = 1.3

export const PopularRestaurants = () => {
    const isDesktop = useWindowWidth();
  return (
    <StyledSection>
      <StyledHeader>
        {"popular restaurant in epicure:".toLocaleUpperCase()}
      </StyledHeader>
      <StyledSwiperContainer>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={30}
          slidesPerView={isDesktop ? SLIDES_PER_VIEW_DESKTPOP : SLIDES_PER_VIEW_MOBILE}
          loop={false}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {epicureData.restaurants.map((restaurant) => (
            <StyledSwiperSlide key={restaurant.name}>
              <Card imgSrc={restaurant.imgUrl} header={restaurant.name}>
                  <StyledChefP>{restaurant.chef}</StyledChefP>
                  {isDesktop&&(<StarsRating rating={restaurant.stars}></StarsRating>)}
              </Card>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      </StyledSwiperContainer>
      <StyledAllRestaurantsDiv>
        <StyledAllRestaurantsP>All Restaurants</StyledAllRestaurantsP>
        <StyledIcon src={ArrowImg}></StyledIcon>
      </StyledAllRestaurantsDiv>
    </StyledSection>
  );
};
