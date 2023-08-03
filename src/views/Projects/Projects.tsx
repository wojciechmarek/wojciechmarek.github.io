import { CommonSectionContainer } from "../../components";
import { projects } from "../../data";
import {
  ProjectsPanel,
  ProjectsPanelCategory,
  ProjectsPanelCategoryTile,
  ProjectsPanelCategoryTileDescription,
  ProjectsPanelCategoryTileTag,
  ProjectsPanelCategoryTileTags,
  ProjectsPanelCategoryTileTitle,
  ProjectsPanelCategoryTiles,
  ProjectsPanelCategoryTitle,
  ProjectsTitle,
} from "./Projects.styled";

export const Projects = () => {
  return (
    <CommonSectionContainer id="projects">
      <ProjectsTitle>#projects</ProjectsTitle>
      <ProjectsPanel>
        {projects.map((project) => (
          <ProjectsPanelCategory key={project.title}>
            <ProjectsPanelCategoryTitle>
              {project.title}
            </ProjectsPanelCategoryTitle>
            <ProjectsPanelCategoryTiles>
              {project.tiles.map((tile) => (
                <ProjectsPanelCategoryTile href={tile.link} key={tile.title} aria-label={tile.title}>
                  <ProjectsPanelCategoryTileTitle>
                    {tile.title}
                  </ProjectsPanelCategoryTileTitle>
                  <ProjectsPanelCategoryTileDescription>
                    {tile.description}
                  </ProjectsPanelCategoryTileDescription>
                  <ProjectsPanelCategoryTileTags>
                    {tile.tags?.map((tag) => (
                      <ProjectsPanelCategoryTileTag key={tag}>
                        #{tag}
                      </ProjectsPanelCategoryTileTag>
                    ))}
                  </ProjectsPanelCategoryTileTags>
                </ProjectsPanelCategoryTile>
              ))}
            </ProjectsPanelCategoryTiles>
          </ProjectsPanelCategory>
        ))}
      </ProjectsPanel>
    </CommonSectionContainer>
  );
};
