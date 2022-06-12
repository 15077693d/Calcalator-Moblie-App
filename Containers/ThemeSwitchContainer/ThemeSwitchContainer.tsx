import React, { useRef } from "react";
import { ThemeId } from "../../Styles/Theme";
import {
  ButtonContainer,
  Container,
  Label,
  LabelWrapper,
  MoveableSwitchButton,
  Title,
} from "./ThemeSwitchContainer.elements";

type ThemeSwitchContainer = {
  activeThemeId: ThemeId;
  handlePress: (activethemeId: ThemeId) => void;
};
export default function ThemeSwitchContainer({
  handlePress: baseHandlePress,
  activeThemeId,
}: ThemeSwitchContainer) {
  // return 1,2,3
  const themeIndex = useRef(0);
  const handlePress = () => {
    if (themeIndex.current === 2) {
      themeIndex.current = 0;
    } else {
      themeIndex.current += 1;
    }
    void baseHandlePress(Object.values(ThemeId)[themeIndex.current]);
  };
  return (
    <Container>
      <LabelWrapper>
        <Label>1</Label>
        <Label>2</Label>
        <Label>3</Label>
      </LabelWrapper>
      <ButtonContainer>
        <MoveableSwitchButton
          handlePress={handlePress}
          label={""}
          activeThemeId={activeThemeId}
        />
      </ButtonContainer>
      <Title>THEME</Title>
    </Container>
  );
}
