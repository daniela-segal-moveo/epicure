import {StyledStar,StyledStarContainer} from "./StarsRating.styles"
interface StarProps {
    rating: number
}

export const StarsRating = ({ rating }: StarProps) => {
  const stars = Array(5).fill(null)

  return (
    <StyledStarContainer className="star-rating">
      {stars.map((_,index) => (
        <StyledStar
          key={index}
          filled = {index < rating}
        >
        </StyledStar>
      ))}
    </StyledStarContainer>
  );
};
