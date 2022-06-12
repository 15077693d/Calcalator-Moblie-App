import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import SwitchButton from "./Components/Button/SwitchButton/SwitchButton";
import NumberPadContainer from "./Containers/NumberPadContainer/NumberPadContainer";
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
        <SwitchButton
          handlePress={(activeThemeId) => setThemeId(activeThemeId)}
          label={""}
        />
        <NumberPadContainer />
      </View>
    </ThemeProvider>
  );
}
