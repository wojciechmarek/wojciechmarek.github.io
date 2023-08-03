import { CommonSectionContainer, CommonSectionTitle } from "../../components";
import {
  ContactLink,
  ContactLinksContainer,
  ContactMeEmail,
  ContactOptions,
  ContactSocialLinks,
  ContactTitleText,
} from "./Contact.styled";

const links = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wojciech-marek/",
  },
  {
    name: "Github",
    link: "https://github.com/wojciechmarek",
  },
];

export const Contact = () => {
  return (
    <CommonSectionContainer id="contact">
      <CommonSectionTitle title="#contact_me" />
      <ContactOptions>
        <ContactSocialLinks>
          <ContactTitleText>
            Send me an{" "}
            <ContactMeEmail href="mailto:marekwojciech@outlook.com">
              e-mail
            </ContactMeEmail>{" "}
            or find me thought social links:
          </ContactTitleText>
          <ContactLinksContainer>
            {links.map((link) => (
              <ContactLink href={link.link} target="_blank">
                {link.name}
              </ContactLink>
            ))}
          </ContactLinksContainer>
        </ContactSocialLinks>
      </ContactOptions>
    </CommonSectionContainer>
  );
};
