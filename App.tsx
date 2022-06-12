import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import SwitchButton from "./Components/Button/SwitchButton/SwitchButton";
import { Theme1 } from "./Styles/Theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={Theme1}>
      <View>
        <SwitchButton />
      </View>
    </ThemeProvider>
  );
}
