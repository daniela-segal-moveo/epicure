import {StyledTabContainer, StyledTabLink} from "./NavBar.styles"

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
