import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NumberPadButton } from "./Components/Button/NumberPadButtons/NumberPadButtons";
import SwitchButton from "./Components/Button/SwitchButton/SwitchButton";
import { NumberPadButtonType } from "./Interfaces/Button";
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
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"RESET"}
          handlePress={function (option: number): void {
            console.log("this is reset");
          }}
          buttonType={NumberPadButtonType.Reset}
        />
        <NumberPadButton
          label={"="}
          handlePress={function (option: number): void {
            console.log("this is reset");
          }}
          buttonType={NumberPadButtonType.Equal}
        />
        <NumberPadButton
          label={"9"}
          handlePress={function (option: number): void {
            console.log("this is primary");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
      </View>
    </ThemeProvider>
  );
}
