import styled from "styled-components";
import FilledStarImg from "../../../assets/icons/FilledStar.svg";
import EmptyStarImg from "../../../assets/icons/EmptyStar.svg";

export const StyledStarContainer = styled.div`
  display: inline-flex;
  font-size: 1.5rem;
  margin-bottom: 18px;
`;

export const StyledStar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "filled",
})<{ filled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.1rem;
  margin-right: 4px;
  width: 40px;
  height: 40px;
  background: ${(props) =>
    props.filled
      ? `url(${FilledStarImg}) no-repeat center center`
      : `url(${EmptyStarImg}) no-repeat center center`};
  background-size: cover;
  cursor: default;
  font-size: 1.5rem;
  line-height: 1;
  text-align: center;
`;
