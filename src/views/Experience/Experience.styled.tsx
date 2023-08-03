import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const ExperienceContainer = styled.div`
  background-color: #0b0c13;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExperienceContent = styled.div`
  max-width: 65em;
  width: 90%;
  flex-grow: 1;
  margin-bottom: 5em;
  color: #fff;
`;

export const ExperiencePanel = styled.div`
  display: flex;
`;

export const ExperiencePanelVerticalLine = styled.div`
  width: 0.125em;
  height: 100vh;
  position: relative;
  left: 1em;
  top: 1em;
  background-color: #898989;
`;

export const ExperiencePanelContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const ExperiencePanelJobContainer = styled.div`
  display: flex;
  gap: 1em;
`;

export const ExperiencePanelJobDotContainer = styled.div`
  margin-top: 0.125em;
  height: 2em;
  aspect-ratio: 1/1;
  background-color: #0b0c13;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ExperiencePanelJobDot = styled.div<{ isActive?: boolean }>`
  position: absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#4cc933" : "#c9335d")};
`;

const pulsate = keyframes`
    0% { -webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
`;

export const ExperiencePanelJobDotRing = styled.div<{ isActive?: boolean }>`
  display: ${(props) => (props.isActive ? "block" : "none")};
  border: 3px solid #62bd19;
  -webkit-border-radius: 30px;
  height: 25px;
  width: 25px;
  position: absolute;
  -webkit-animation: ${pulsate} 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0;
`;

export const ExperiencePanelJobContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const ExperiencePanelJobData = styled.div``;

export const ExperiencePanelJobCompanyName = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #c9335d;
  }
`;

export const ExperiencePanelJobPositionContainer = styled.div``;

export const ExperiencePanelJobPositionData = styled.div`
  display: flex;
  gap: 1em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const ExperiencePanelJobPositionDescription = styled.ul`
  margin-top: 1.25em;
  margin-left: 1em;
  margin-bottom: 3em;
`;

export const ExperiencePanelJobPositionDescriptionItem = styled.li`
  margin: 0.25em 0;
`;

export const ExperiencePanelJobPositionText = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #898989;

  @media screen and (max-width: 768px) {
    &.vertical_separator {
      display: none;
    }
  }
`;

export const ExperiencePanelJobPositionTitle = styled.div``;

export const ExperiencePanelJobDescription = styled.div``;

export const ExperiencePanelJobTitleAndCompany = styled.p`
  display: flex;
  align-items: center;
  gap: 2em;
`;

export const ExperiencePanelJobTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
`;

export const ExperiencePanelJobCompany = styled.div`
  font-size: 1.75rem;
  font-weight: 900;
  color: white;
`;

export const ExperiencePanelJobDuration = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #9d9d9d;
`;

export const ExperiencePanelJobPosition = styled.div``;
