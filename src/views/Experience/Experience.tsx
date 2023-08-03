import { CommonSectionContainer, CommonSectionTitle } from "../../components";
import {
  ExperiencePanel,
  ExperiencePanelContent,
  ExperiencePanelJobCompanyName,
  ExperiencePanelJobContainer,
  ExperiencePanelJobContent,
  ExperiencePanelJobData,
  ExperiencePanelJobDot,
  ExperiencePanelJobDotContainer,
  ExperiencePanelJobDotRing,
  ExperiencePanelJobPositionContainer,
  ExperiencePanelJobPositionData,
  ExperiencePanelJobPositionDescription,
  ExperiencePanelJobPositionDescriptionItem,
  ExperiencePanelJobPositionText,
} from "./Experience.styled";

const companies = [
  {
    name: "Xebia Poland (formerly as PGS Software)",
    link: "https://xebia.com/",
    isActive: true,
    positions: [
      {
        name: "Frontend Web Developer",
        duration: "May 2022 - now",
        responsibilities: [
          "Helping the frontend develops team to maintain a custom controls library for the client from the low-cost airline industry.",
          "Developing new features for the existing internal system used to manage the company's projects and also logging work time for employees.",
          "Developing a greenfield project for internal use to facilitate the process of generating notes during a technical interview.",
        ],
      },
    ],
  },
  {
    name: "Fabrity",
    link: "https://fabrity.com/",
    isActive: false,
    positions: [
      {
        name: "Regular Software Developer",
        duration: "January 2021 - December 2021",
        responsibilities: [
          "Implementing new features in the existing system. The system was a retail engine written in C# language and divided into several microservices. The communication between microservices was based on a message broker (Kafka) and orchestrated by the Saga pattern. The project was for the company for the medical services industry, one of the biggest in central europe.",
        ],
      },
      {
        name: "Junior Software Developer",
        duration: "January 2020 - January 2021",
        responsibilities: [
          "Rewriting an existing software written in the Universal Windows Platform into a new version (a greenfield project) written in Angular framework. The project was for one of the biggest companies from the pharmaceutical industry, headquartered in the United States of America.",
          "Extending an existing project with new features. The software was written in ASP.NET MVC and was used to facilitate the generation, crating, and management of documents. The project was for a company from the building industry in Poland.",
        ],
      },
    ],
  },
  {
    name: "South Mountain YMCA Camps",
    link: "https://smymca.org/",
    isActive: false,
    positions: [
      {
        name: "General Maintenance Staff",
        duration: "June 2019 - August 2019",
        responsibilities: [
          "Keeping the camp clean and safe for the campers.",
          "Maintaining the camp facilities.",
          "Improving the English language skills.",
        ],
      },
    ],
  },
  {
    name: "{e-bi}",
    link: "https://e-bi.pl/",
    isActive: false,
    positions: [
      {
        name: "Junior .Net Developer (working student)",
        duration: "October 2018 - April 2019",
        responsibilities: [
          "Creating a Xamarin mobile application for existing CMS system.",
          "Testing and maintaining a web application written in the Angular framework. The project gave the people the to share their private parking lots.",
        ],
      },
    ],
  },
];

export const Experience = () => {
  return (
    <CommonSectionContainer id="experience">
      <CommonSectionTitle title="#my_experience" />
      <ExperiencePanel>
        {/* <ExperiencePanelVerticalLine /> */}
        <ExperiencePanelContent>
          {companies.map((job) => (
            <ExperiencePanelJobContainer>
              <ExperiencePanelJobDotContainer>
                <ExperiencePanelJobDot isActive={job.isActive} />
                <ExperiencePanelJobDotRing isActive={job.isActive} />
              </ExperiencePanelJobDotContainer>
              <ExperiencePanelJobContent>
                <ExperiencePanelJobData>
                  <ExperiencePanelJobCompanyName
                    href={job.link}
                    target="_blank"
                  >
                    {job.name}
                  </ExperiencePanelJobCompanyName>
                  {job.positions.map((position) => (
                    <ExperiencePanelJobPositionContainer key={position.name}>
                      <ExperiencePanelJobPositionData>
                        <ExperiencePanelJobPositionText>
                          {position.duration}
                        </ExperiencePanelJobPositionText>
                        <ExperiencePanelJobPositionText className="vertical_separator">
                          |
                        </ExperiencePanelJobPositionText>
                        <ExperiencePanelJobPositionText>
                          {position.name}
                        </ExperiencePanelJobPositionText>
                      </ExperiencePanelJobPositionData>
                      <ExperiencePanelJobPositionDescription>
                        {position?.responsibilities?.map(
                          (responsibility: string) => (
                            <ExperiencePanelJobPositionDescriptionItem
                              key={responsibility}
                            >
                              {responsibility}
                            </ExperiencePanelJobPositionDescriptionItem>
                          )
                        )}
                      </ExperiencePanelJobPositionDescription>
                    </ExperiencePanelJobPositionContainer>
                  ))}
                </ExperiencePanelJobData>
              </ExperiencePanelJobContent>
            </ExperiencePanelJobContainer>
          ))}
        </ExperiencePanelContent>
      </ExperiencePanel>
    </CommonSectionContainer>
  );
};
