import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import DisplayBoardContainer from "./Containers/DisplayBoardContainer/DisplayBoardContainer";
import NumberPadContainer from "./Containers/NumberPadContainer/NumberPadContainer";
import ThemeSwitchContainer from "./Containers/ThemeSwitchContainer/ThemeSwitchContainer";
import { ThemeId, THEMES } from "./Styles/Theme";

export default function App() {
  const [themeId, setThemeId] = useState<ThemeId>(ThemeId.Theme1);
  let [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={THEMES[themeId]}>
      <View>
        <ThemeSwitchContainer
          handlePress={(activethemeId) => setThemeId(activethemeId)}
          activeThemeId={themeId}
        />
        <DisplayBoardContainer label={"123,123"} />
        <NumberPadContainer />
      </View>
    </ThemeProvider>
  );
}
