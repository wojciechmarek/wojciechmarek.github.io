import {
  AboutContainer,
  AboutContent,
  AboutTextParagraph,
  AboutTitle,
} from "./About.styled";

export const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutTitle>#about_me</AboutTitle>
        <AboutTextParagraph>
          Hi again! My name is Wojciech Marek, and I am a software developer. I
          create web applications using Angular, React, and Nest.js. Previously I
          have worked with C# language and .NET framework, but JavaScript (or, to be more
          precise - Typescript) took my heart.
        </AboutTextParagraph>
        <AboutTextParagraph>
          I started my journey with programming at the end of 2012, playing
          with C programming language to create simple batch programs that run the
          ATMega16 micro-controller. Having some experience with C, I have
          decided to learn C++ to make some console programs to automate some
          tasks on my computer. I have also started to learn about
          object-oriented programming and design patterns.
        </AboutTextParagraph>
        <AboutTextParagraph>
          Then I decided to start a computer science course at the local college
          (2016) to learn more about programming and computer science in
          general. I have learned about algorithms, data structures, databases,
          operating systems, computer networks, etc. I have also
          learned about C# programming language and the .NET framework. Having better
          knowledge about that, I have started to build Windows apps using
          Windows Forms and WPF. Here I also started to learn about web
          development using Angular framework in the most recent version 6th
          (beginning of 2019).
        </AboutTextParagraph>
        <AboutTextParagraph>
          I started my first job as a Junior .Net Developer in the October of
          2018 as a working student. After seven months, I decided to use my
          student status to visit the United States of America for four months
          working on a J1 visa. After returning to Poland, I started my
          first real job as a Junior Software Engineer. Until now, I have kept
          learning new things and technologies to become a better developer and
          finally create software that will change the world 🚀.
        </AboutTextParagraph>
      </AboutContent>
    </AboutContainer>
  );
};
