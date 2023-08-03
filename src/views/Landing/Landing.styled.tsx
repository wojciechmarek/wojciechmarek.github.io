import styled from "@emotion/styled";

export const LandingContainer = styled.section`
  background-color: var(--background-color);
  height: calc(100vh - 5em);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingContent = styled.div`
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65em;
  width: 90%;
  gap: 3em;
`;

export const LandingGreetings = styled.h1`
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  background: var(--landing-header-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-wrap: break-word;
  line-height: 1.25em;
`;

export const LandingSubGreetings = styled.div`
  font-size: clamp(1.25rem, 1.75vw, 2.75rem);
  font-weight: 700;
`;

export const LandingSubHighlight = styled.span`
  color: var(--text-highlight-color);
  font-weight: bold;
`;
