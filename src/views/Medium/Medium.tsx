import { CommonSectionContainer, CommonSectionTitle } from "../../components";
import { medium } from "../../data";
import {
  MediumPanel,
  MediumPanelCategory,
  MediumPanelCategoryTile,
  MediumPanelCategoryTileDescription,
  MediumPanelCategoryTileTitle,
  MediumPanelCategoryTiles,
  MediumPanelCategoryTitle,
} from "./Medium.styled";


export const Medium = () => {
  return (
    <CommonSectionContainer id="articles">
      <CommonSectionTitle title="#medium_articles" />
      <MediumPanel>
        {medium.map((category) => (
          <MediumPanelCategory>
            <MediumPanelCategoryTitle>
              {category.title}
            </MediumPanelCategoryTitle>
            <MediumPanelCategoryTiles>
              {category.posts.map((post) => (
                <MediumPanelCategoryTile
                  tileColor={post.color}
                  href={post.link}
                >
                  <MediumPanelCategoryTileTitle>
                    {post.title}
                  </MediumPanelCategoryTileTitle>
                  <MediumPanelCategoryTileDescription>
                    {post.description}
                  </MediumPanelCategoryTileDescription>
                </MediumPanelCategoryTile>
              ))}
            </MediumPanelCategoryTiles>
          </MediumPanelCategory>
        ))}
      </MediumPanel>
    </CommonSectionContainer>
  );
};
