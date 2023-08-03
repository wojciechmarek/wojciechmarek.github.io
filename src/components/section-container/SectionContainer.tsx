import { ReactNode } from "react";
import {
  CommonContactContentStyle,
  CommonSectionContainerStyle,
} from "./SectionContainer.styled";

export interface CommonSectionContainerProps {
  id: string;
  children: ReactNode;
}

export const CommonSectionContainer = (props: CommonSectionContainerProps) => {
  const { id, children } = props;

  return (
    <CommonSectionContainerStyle id={id}>
      <CommonContactContentStyle>{children}</CommonContactContentStyle>
    </CommonSectionContainerStyle>
  );
};
