import {
  ContactContainer,
  ContactContent,
  ContactLink,
  ContactLinksContainer,
  ContactMeEmail,
  ContactOptions,
  ContactSocialLinks,
  ContactTitle,
  ContactTitleText,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>#contact_me</ContactTitle>
        <ContactOptions>
          <ContactSocialLinks>
            <ContactTitleText>Find me thought social links:</ContactTitleText>
            <ContactLinksContainer>
              <ContactLink
                href="https://www.linkedin.com/in/wojciech-marek/"
                target="_blank"
              >
                Linked
              </ContactLink>
              <ContactLink
                href="https://github.com/wojciechmarek"
                target="_blank"
              >
                Github
              </ContactLink>
              <ContactLink
                href="https://medium.com/@wojciechmarek"
                target="_blank"
              >
                Medium
              </ContactLink>
            </ContactLinksContainer>
            <ContactTitleText>
              Or send me an{" "}
              <ContactMeEmail href="mailto:marekwojciech@outlook.com">
                e-mail
              </ContactMeEmail>
              .
            </ContactTitleText>
          </ContactSocialLinks>
        </ContactOptions>
      </ContactContent>
    </ContactContainer>
  );
};
