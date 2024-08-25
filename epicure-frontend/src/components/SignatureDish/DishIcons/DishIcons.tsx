import { StyledIcon, StyledFoodIconsContainer } from "./DishIcons.styles";

import vegImg from "../../../assets/icons/vegan.svg";
import VegeterianImg from "../../../assets/icons/Vegeterian.svg";
import spicyImg from "../../../assets/icons/Spicy.svg";

interface DishIconsProps {
    foodIcons: string[];
}

const iconMap: { [key: string]: string } = {
    spicy: spicyImg,
    veg: vegImg,
    vegetarian: VegeterianImg
};

export const DishIcons = ({ foodIcons }: DishIconsProps) => {
  return (
    <StyledFoodIconsContainer className="food-type-icons">
      {foodIcons.map((icon, index) => (
        <StyledIcon
          key={index}
          src={iconMap[icon]}
        />
      ))}
    </StyledFoodIconsContainer>
  );
};

