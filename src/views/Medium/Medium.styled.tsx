import styled from "@emotion/styled";

export const MediumPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  max-width: 65em;
  margin-bottom: 5em;
`;

export const MediumPanelCategory = styled.div`
  width: 100%;
`;

export const MediumPanelCategoryTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--text-color);
  font-weight: 900;
  margin-left: 0.25em;
`;

export const MediumPanelCategoryTiles = styled.div`
  width: 100%;
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  cursor: default;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MediumPanelCategoryTile = styled.a<{ tileColor?: string }>`
  padding: 1em 1em;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);;
  cursor: pointer;
  text-decoration: none;
  

  &:hover {
    background-color: ${({ tileColor }) => tileColor};
  }
`;

export const MediumPanelCategoryTileTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--text-color);
  margin-bottom: 0.25em;
`;

export const MediumPanelCategoryTileDescription = styled.p`
  color: var(--text-color);
`;

export const MediumPanelCategoryTileLink = styled.a``;
