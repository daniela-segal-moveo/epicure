import {StyledTabContainer, StyledTabLink} from "./NavBar.styles"
import useWindowWidth from "../../hooks/useWindowWidth"

export const TabLinks = () => {
  return (
    <div>
        <StyledTabContainer>
            <StyledTabLink to="/">Resturants</StyledTabLink>
            <StyledTabLink to="/">Chefs</StyledTabLink>
        </StyledTabContainer>
    </div>
  )
}
