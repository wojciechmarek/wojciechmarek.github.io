import {
  LandingContainer,
  LandingContent,
  LandingGreetings,
  LandingSubGreetings,
  LandingSubHighlight,
} from "./Landing.styled";
import { landingHeader } from "../../data";

export const Landing = () => {
  return (
    <LandingContainer>
      <LandingContent>
        <LandingGreetings>{landingHeader}</LandingGreetings>
        <LandingSubGreetings>
          I am <LandingSubHighlight>Wojciech Marek</LandingSubHighlight>. I am a
          full-stack software engineer, but I mainly change the world using the
          superpowers of <LandingSubHighlight>TypeScript</LandingSubHighlight>{" "}
          to create beautiful{" "}
          <LandingSubHighlight>websites</LandingSubHighlight> and{" "}
          <LandingSubHighlight>web applications</LandingSubHighlight>.
        </LandingSubGreetings>
      </LandingContent>
    </LandingContainer>
  );
};
