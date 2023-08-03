import {
  MediumContainer,
  MediumContent,
  MediumPanel,
  MediumPanelCategory,
  MediumPanelCategoryTile,
  MediumPanelCategoryTileDescription,
  MediumPanelCategoryTileTitle,
  MediumPanelCategoryTiles,
  MediumPanelCategoryTitle,
  MediumTitle,
} from "./Medium.styled";

const categories = [
  {
    title: "Artificial Intelligence",
    posts: [
      {
        title: "Basics of an Artificial Intelligence",
        description: "A sample website that uses GPT-3 OpenAI API to generate text based on user input.",
        link: "https://github.com/wojciechmarek/gpt-3-open-ai",
        color: "#4233c9",
      },
      {
        title: "Basics of a Machine Learning",
        description: "A sample website for a travel agency.",
        link: "https://github.com/wojciechmarek/travel-agency",
        color: "#4233c9",
      },
      {
        title: "Basics of a an Artificial Neural Network",
        description: "A sample website for a fictional company that sells robots.",
        link: "https://github.com/wojciechmarek/robo-punks",
        color: "#4233c9",
      },
    ],
  },
  {
    title: "CSS",
    posts: [
      {
        title: "CSS Grid",
        description: "A WPF app that recognizes language of a given text.",
        link: "https://github.com/wojciechmarek/language-recognition",
        color: "#c93392",
      },
    ],
  },
];

export const Medium = () => {
  return (
    <MediumContainer id="articles">
      <MediumContent>
        <MediumTitle>#medium_articles</MediumTitle>
        <MediumPanel>
          {categories.map((category) => (
            <MediumPanelCategory>
              <MediumPanelCategoryTitle>
                {category.title}
              </MediumPanelCategoryTitle>
              <MediumPanelCategoryTiles>
                {category.posts.map((posts) => (
                  <MediumPanelCategoryTile tileColor={posts.color} href={posts.link}>
                    <MediumPanelCategoryTileTitle>
                      {posts.title}
                    </MediumPanelCategoryTileTitle>
                    <MediumPanelCategoryTileDescription>
                      {posts.description}
                    </MediumPanelCategoryTileDescription>
                  </MediumPanelCategoryTile>
                ))}
              </MediumPanelCategoryTiles>
            </MediumPanelCategory>
          ))}
        </MediumPanel>
      </MediumContent>
    </MediumContainer>
  );
};
