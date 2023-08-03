import { CommonSectionContainer, CommonSectionTitle } from "../../components";
import { experience } from "../../data";
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


export const Experience = () => {
  return (
    <CommonSectionContainer id="experience">
      <CommonSectionTitle title="#experience" />
      <ExperiencePanel>
        {/* <ExperiencePanelVerticalLine /> */}
        <ExperiencePanelContent>
          {experience.map((job) => (
            <ExperiencePanelJobContainer key={job.name}>
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
