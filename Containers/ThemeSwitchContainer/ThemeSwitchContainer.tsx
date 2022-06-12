import React, { useRef } from "react";
import { useSwitchThemeContext } from "../../Contexts/SwitchThemeContext";
import { ThemeId } from "../../Styles/Theme";
import {
  ButtonContainer,
  Container,
  Label,
  LabelWrapper,
  MoveableSwitchButton,
  Title,
} from "./ThemeSwitchContainer.elements";

export default function ThemeSwitchContainer() {
  const { themeId, setThemeId } = useSwitchThemeContext();
  // return 1,2,3
  const themeIndex = useRef(0);
  const handlePress = () => {
    if (themeIndex.current === 2) {
      themeIndex.current = 0;
    } else {
      themeIndex.current += 1;
    }
    void setThemeId(Object.values(ThemeId)[themeIndex.current]);
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
          activeThemeId={themeId}
        />
      </ButtonContainer>
      <Title>THEME</Title>
    </Container>
  );
}
