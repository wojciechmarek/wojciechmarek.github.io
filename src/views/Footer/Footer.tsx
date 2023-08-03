import {
  FooterBoldText,
  FooterContainer,
  FooterContent,
  FooterText,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterBoldText>
          © {new Date().getFullYear()} Wojciech Marek.
        </FooterBoldText>
        <FooterText>All rights reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};
