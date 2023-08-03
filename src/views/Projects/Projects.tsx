import {
  ProjectsContainer,
  ProjectsContent,
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

const projects = [
  {
    title: "Websites",
    tiles: [
      {
        title: "GPT-3 OpenAI",
        description: "A sample website that uses GPT-3 OpenAI API to generate text based on user input.",
        link: "https://github.com/wojciechmarek/gpt-3-open-ai",
        tags: ["react", "typescript", "openai", "gpt-3"],
        color: "#7F27C3",
      },
      {
        title: "Travel Agency",
        description: "A sample website for a travel agency.",
        link: "https://github.com/wojciechmarek/travel-agency",
        color: "#7F27C3",
      },
      {
        title: "Robo Punks",
        description: "A sample website for a fictional company that sells robots.",
        link: "https://github.com/wojciechmarek/robo-punks",
        color: "#7F27C3",
      },
    ],
  },
  {
    title: "Apps",
    tiles: [
      {
        title: "Tic Tac Toe",
        description: "A simple tic tac toe game.",
        link: "https://github.com/wojciechmarek/tic-tac-toe-game",
        color: "#7F27C3",
        tags: ["angular", "typescript", "nebular", "pwa"],
      },
      {
        title: "Todo List",
        description: "A simple todo list app representing most of trends in the application UI design.",
        link: "https://github.com/wojciechmarek/todo-list",
        color: "#12aea8",
        tags: ["react", "typescript", "design-styles", "styled-components"],
      },
      {
        title: "React Navbar",
        description: "An sample ready-to-use navbar for React apps.",
        link: "https://github.com/wojciechmarek/awesome-react-navbar",
        color: "#12aea8",
        tags: ["react", "typescript", "tailwind", "mega-menu", "navbar", "kbar"],
      },
      {
        title: "Kanban Board",
        description: "A kanban board app.",
        link: "https://github.com/wojciechmarek/kanban-board",
        color: "#c98a33",
      }
    ],
  },
  {
    title: "AI",
    tiles: [
      {
        title: "Language recognition",
        description: "A WPF app that recognizes language of a given text.",
        link: "https://github.com/wojciechmarek/language-recognition",
        color: "#c93392",
        tags: ["c#", "windows", "wpf", "machine learning", "ai"],
      },
      {
        title: "Digit recognition",
        description: "An Angular app that recognizes digits from 0 to 9.",
        link: "https://github.com/wojciechmarek/digits-recognition",
        color: "#c93392",
      },
    ],
  },
];

export const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
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
                        <ProjectsPanelCategoryTileTag>#{tag}</ProjectsPanelCategoryTileTag>
                      ))}
                    </ProjectsPanelCategoryTileTags>
                  </ProjectsPanelCategoryTile>
                ))}
              </ProjectsPanelCategoryTiles>
            </ProjectsPanelCategory>
          ))}
        </ProjectsPanel>
      </ProjectsContent>
    </ProjectsContainer>
  );
};
