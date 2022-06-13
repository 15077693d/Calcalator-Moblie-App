import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { CalculatorContextProvider } from "./Contexts/CalculatorContext";
import { SwitchThemeContextProvider } from "./Contexts/SwitchThemeContext";
import CalculatorScreen from "./Screens/CalculatorScreen/CalculatorScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <CalculatorContextProvider>
      <SwitchThemeContextProvider>
        <CalculatorScreen />
      </SwitchThemeContextProvider>
    </CalculatorContextProvider>
  );
}
