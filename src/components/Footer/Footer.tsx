import {
  StyledFooterContainer,
  StyledFooterLink,
  StyledFooterWarper,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <StyledFooterWarper className="warper">
    <StyledFooterContainer>
        <StyledFooterLink to="">Contact Us</StyledFooterLink>
        <StyledFooterLink to="">Term of Use</StyledFooterLink>
        <StyledFooterLink to="">Privacy Policy</StyledFooterLink>
    </StyledFooterContainer>
    </StyledFooterWarper>
  );
};
