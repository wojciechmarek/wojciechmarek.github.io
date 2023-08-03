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
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>#contact_me</ContactTitle>
        <ContactOptions>
          <ContactSocialLinks>
            <ContactTitleText>
              Send me an {" "}
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
      </ContactContent>
    </ContactContainer>
  );
};
