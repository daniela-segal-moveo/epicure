import ArrowImg from "../../assets/icons/Arrow.svg";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import {
  StyledSection,
  StyledHeader,
  StyledSwiperContainer,
  StyledSwiper,
  StyledAllRestaurantsDiv,
  StyledAllRestaurantsP,
  StyledIcon,
} from "./SpotlightSection.styles"
import useWindowWidth from "../../hooks/useWindowWidth";

const SLIDES_PER_VIEW_DESKTPOP = 3;
const SLIDES_PER_VIEW_MOBILE = 1.3;

interface SpotlightProps {
    children: React.ReactNode
    mainHeader: string;
}

export const SpotlightSection = ({children, mainHeader}: SpotlightProps) => {
  const isDesktop = useWindowWidth();
  return (
    <StyledSection>
      <StyledHeader>
        {mainHeader.toLocaleUpperCase()}
      </StyledHeader>
      <StyledSwiperContainer>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={30}
          slidesPerView={
            isDesktop ? SLIDES_PER_VIEW_DESKTPOP : SLIDES_PER_VIEW_MOBILE
          }
          loop={false}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
            {children}
        </StyledSwiper>
      </StyledSwiperContainer>
      <StyledAllRestaurantsDiv>
        <StyledAllRestaurantsP>All Restaurants</StyledAllRestaurantsP>
        <StyledIcon src={ArrowImg}></StyledIcon>
      </StyledAllRestaurantsDiv>
    </StyledSection>
  );
};
