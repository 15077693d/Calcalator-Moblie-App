import React from "react";
import { ThemeProvider } from "styled-components/native";
import DisplayBoardContainer from "../../Containers/DisplayBoardContainer/DisplayBoardContainer";
import NumberPadContainer from "../../Containers/NumberPadContainer/NumberPadContainer";
import ThemeSwitchContainer from "../../Containers/ThemeSwitchContainer/ThemeSwitchContainer";
import { useSwitchThemeContext } from "../../Contexts/SwitchThemeContext";
import { THEMES } from "../../Styles/Theme";
import {
  Background,
  Container,
  Logo,
  LogoAndThemeSwitchWrapper,
} from "./CalculatorScreen.elements";

export default function CalculatorScreen() {
  const { themeId } = useSwitchThemeContext();

  return (
    <ThemeProvider theme={THEMES[themeId]}>
      <Background>
        <Container>
          <LogoAndThemeSwitchWrapper>
            <Logo>calc</Logo>
            <ThemeSwitchContainer />
          </LogoAndThemeSwitchWrapper>
          <DisplayBoardContainer label={"123,234"} />
          <NumberPadContainer />
        </Container>
      </Background>
    </ThemeProvider>
  );
}
