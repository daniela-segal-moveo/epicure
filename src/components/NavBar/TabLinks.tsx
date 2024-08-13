import {StyledTabContainer, StyledTabLink} from "./NavBar.styles"
import useWindowWidth from "../../hooks/useWindowWidth"

export const TabLinks = () => {
  const windowWidth = useWindowWidth()
  return (
    <div>
        <StyledTabContainer isDesktop={windowWidth}>
            <StyledTabLink to="/">Resturants</StyledTabLink>
            <StyledTabLink to="/">Chefs</StyledTabLink>
        </StyledTabContainer>
    </div>
  )
}
