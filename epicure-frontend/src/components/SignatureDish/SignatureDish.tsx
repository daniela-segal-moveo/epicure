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
import { SpotlightSection } from "../SpotlightSection/SpotlightSection";
import { DishIcons } from "./DishIcons/DishIcons";
import IlsImg from "../../assets/icons/ILS.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getSignatureDishes } from "../../store/thunks/DishThunk";

export const SignatureDish = () => {
  const isDesktop = useWindowWidth() >= 900;
  const dispatch: AppDispatch = useDispatch();
  const { signatureDishes, status } = useSelector(
    (state: RootState) => state.dishes
  );

  useEffect(() => {
    if (status == "idle") {
      dispatch(getSignatureDishes());
    }
  }, []);
  return (
    <SpotlightSection mainHeader="Signature Dish Of:">
      {signatureDishes &&
        signatureDishes.map((dish) => (
          <StyledSwiperSlide key={dish.name}>
            <Card imgSrc={dish.imageUrl} header={dish.name}>
              {isDesktop && <DishIcons foodIcons={dish.category}></DishIcons>}
              <StyledIngredientsContainer>
                <StyledIngredients>
                  {dish.ingredients.join(", ")}
                </StyledIngredients>
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
