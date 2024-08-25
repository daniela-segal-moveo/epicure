import { StyledSwiperSlide } from "../SpotlightSection/SpotlightSection.styles";
import {
  StyledIngredients,
  StyledDishPrice,
  StyledDishPriceContainer,
  StyledIlsIcon,
  StyledGreyLine,
  StyledDishPriceDiv,
  StyledIngredientsContainer,
} from "./SignatureDish.styles";
import { Card } from "../Card/Card";
import useWindowWidth from "../../hooks/useWindowWidth";
import { epicureData } from "../../data";
import { SpotlightSection } from "../SpotlightSection/SpotlightSection";
import { DishIcons } from "./DishIcons/DishIcons";
import IlsImg from "../../assets/icons/ILS.svg";

export const SignatureDish = () => {
  const isDesktop = useWindowWidth()>=900;
  return (
    <SpotlightSection mainHeader="Signature Dish Of:">
      {epicureData.dishes
        .filter((dish) => dish.isSignature)
        .map((dish) => (
          <StyledSwiperSlide key={dish.name}>
            <Card imgSrc={dish.imgUrl} header={dish.name}>
              {isDesktop && <DishIcons foodIcons={dish.category}></DishIcons>}
              <StyledIngredientsContainer>
                <StyledIngredients>{dish.ingredients}</StyledIngredients>
              </StyledIngredientsContainer>
              {!isDesktop && <DishIcons foodIcons={dish.category}></DishIcons>}
              <StyledDishPriceContainer>
                {isDesktop && <StyledGreyLine />}
                <StyledDishPriceDiv>
                  <StyledIlsIcon src={IlsImg} />
                  <StyledDishPrice>{dish.price}</StyledDishPrice>
                </StyledDishPriceDiv>
                {isDesktop && <StyledGreyLine />}
              </StyledDishPriceContainer>
            </Card>
          </StyledSwiperSlide>
        ))}
    </SpotlightSection>
  );
};
