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
      <ProjectsTitle>#some_projects</ProjectsTitle>
      <ProjectsPanel>
        {projects.map((project) => (
          <ProjectsPanelCategory>
            <ProjectsPanelCategoryTitle>
              {project.title}
            </ProjectsPanelCategoryTitle>
            <ProjectsPanelCategoryTiles>
              {project.tiles.map((tile) => (
                <ProjectsPanelCategoryTile href={tile.link}>
                  <ProjectsPanelCategoryTileTitle>
                    {tile.title}
                  </ProjectsPanelCategoryTileTitle>
                  <ProjectsPanelCategoryTileDescription>
                    {tile.description}
                  </ProjectsPanelCategoryTileDescription>
                  <ProjectsPanelCategoryTileTags>
                    {tile.tags?.map((tag) => (
                      <ProjectsPanelCategoryTileTag>
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
