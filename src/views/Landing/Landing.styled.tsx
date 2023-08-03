import styled from "@emotion/styled";

export const LandingContainer = styled.div`
  background-color: #0b0c13;
  height: calc(100vh - 5em);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingContent = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65em;
  width: 90%;
  gap: 3em;
`;

export const LandingGreetings = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  background: -webkit-linear-gradient(0deg, #6317c0, #b723d5);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-wrap: break-word;
  line-height: 1.25em;
`;

export const LandingSubGreetings = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const LandingSubHighlight = styled.span`
  background: #c9335d;
`;
