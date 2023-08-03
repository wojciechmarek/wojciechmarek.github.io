import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  background-color: var(--tile-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 3em;
`;

export const FooterContent = styled.div`
  max-width: 65em;
  width: 90%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  display: flex;
  gap: 0.5em;
`;

export const FooterBoldText = styled.p`
  color: var(--text-color);
  font-weight: 900;
`;

export const FooterText = styled.p`
  color: var(--text-color);
`;



