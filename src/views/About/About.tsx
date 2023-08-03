import { CommonSectionContainer, CommonSectionTitle } from "../../components";
import { about } from "../../data";
import { AboutTextParagraph } from "./About.styled";

export const About = () => {
  return (
    <CommonSectionContainer id="about">
      <CommonSectionTitle title="#about" />
      {about.map((paragraph) => (
        <AboutTextParagraph key={paragraph}>{paragraph}</AboutTextParagraph>
      ))}
    </CommonSectionContainer>
  );
};
