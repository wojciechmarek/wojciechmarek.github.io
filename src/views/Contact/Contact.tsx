import { CommonSectionContainer, CommonSectionTitle } from "../../components";
import { links } from "../../data";
import {
  ContactLink,
  ContactLinksContainer,
  ContactMeEmail,
  ContactOptions,
  ContactSocialLinks,
  ContactTitleText,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <CommonSectionContainer id="contact">
      <CommonSectionTitle title="#contact_me" />
      <ContactOptions>
        <ContactSocialLinks>
          <ContactTitleText>
            Send me an{" "}
            <ContactMeEmail
              href="mailto:marekwojciech@outlook.com"
              aria-label="Send me an e-mail"
            >
              e-mail
            </ContactMeEmail>{" "}
            or find me thought social links:
          </ContactTitleText>
          <ContactLinksContainer>
            {links.map((link) => (
              <ContactLink
                href={link.link}
                target="_blank"
                key={link.name}
                aria-label={link.name}
              >
                {link.name}
              </ContactLink>
            ))}
          </ContactLinksContainer>
        </ContactSocialLinks>
      </ContactOptions>
    </CommonSectionContainer>
  );
};
