import { CommonSectionTitleStyle } from "./SectionTitle.styled";

export interface CommonSectionTitleProps {
  title: string;
}

export const CommonSectionTitle = (props: CommonSectionTitleProps) => {
  const { title } = props;
  
  return <CommonSectionTitleStyle>{title}</CommonSectionTitleStyle>;
};
