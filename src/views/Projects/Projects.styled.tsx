import styled from "@emotion/styled";

export const ProjectsContainer = styled.div`
  background-color: #0b0c13;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectsTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  margin: 1em 0;
`;

export const ProjectsContent = styled.div`
  width: 90%;
  flex-grow: 1;
  margin-bottom: 5em;
  max-width: 65em;
  width: 90%;
`;

export const ProjectsPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  max-width: 65em;
  margin-bottom: 5em;
`;

export const ProjectsPanelCategory = styled.div`
  width: 100%;
`;

export const ProjectsPanelCategoryTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 900;
  margin-left: 0.25em;
`;

export const ProjectsPanelCategoryTiles = styled.div`
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

export const ProjectsPanelCategoryTile = styled.a`
  padding: 1em;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  background-color: #161721;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: #7F27C3;
  }
`;

export const ProjectsPanelCategoryTileTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
`;

export const ProjectsPanelCategoryTileDescription = styled.p`
  color: #fff;
  margin-top: 0.25em;
`;

export const ProjectsPanelCategoryTileTags = styled.div`
  margin-top: auto; 
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 0.75em;
`;

export const ProjectsPanelCategoryTileTag = styled.span`
  font-size: 0.75rem;
  font-weight: 900;
  color: #fff;
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  background-color: #c9335d;
`;

export const ProjectsPanelCategoryTileLink = styled.a``;
