import { DefaultTheme } from "styled-components/native";

const borderRadius = {
  large: "50px",
  medium: "10px",
  small: "5px",
};

export const Theme1: DefaultTheme = {
  borderRadius,
  color: {
    background: {
      main: "#3A4663",
      switchAndNumberPad: "#242D44",
      displayBoard: "#181F33",
    },
    button: {
      resetAndDelete: { hover: "#A2B2E1", normal: "#647198" },
      primary: { hover: "#FFFFFE", normal: "#EAE3DC" },
      equalAndSwitch: { hover: "#F96B5B", normal: "#D03F2F" },
    },
    buttonShadow: {
      resetAndDelete: "#414E73",
      equalAndSwitch: "#93261A",
      primary: "#B3A497",
    },
    text: {
      abroveNumberPadText: "#FFFFFF",
      resetAndDeleteButton: "#FFFFFF",
      equalButton: "#FFFFFF",
      primaryButton: "#434A59",
    },
  },
};

export const Theme2: DefaultTheme = {
  borderRadius,
  color: {
    background: {
      main: "#E6E6E6",
      switchAndNumberPad: "#D2CDCD",
      displayBoard: "#EEEEEE",
    },
    button: {
      resetAndDelete: { hover: "#62B5BC", normal: "#378187" },
      primary: { hover: "#FFFFFF", normal: "#E5E4E1" },
      equalAndSwitch: { hover: "#FF8A38", normal: "#C85402" },
    },
    buttonShadow: {
      resetAndDelete: "#1B6066",
      equalAndSwitch: "#873901",
      primary: "#A79E91",
    },
    text: {
      abroveNumberPadText: "#36362C",
      resetAndDeleteButton: "#FFFFFF",
      equalButton: "#FFFFFF",
      primaryButton: "#36362C",
    },
  },
};

export const Theme3: DefaultTheme = {
  borderRadius,
  color: {
    background: {
      main: "#17062A",
      switchAndNumberPad: "#1E0936",
      displayBoard: "#1E0936",
    },
    button: {
      resetAndDelete: { hover: "#8631AF", normal: "#56077C" },
      primary: { hover: "#6C34AC", normal: "#331C4D" },
      equalAndSwitch: { hover: "#93FFF8", normal: "#00DED0" },
    },
    buttonShadow: {
      resetAndDelete: "#BE15F4",
      equalAndSwitch: "#6CF9F1",
      primary: "#881C9E",
    },
    text: {
      abroveNumberPadText: "#FFE53",
      resetAndDeleteButton: "#FFFFFF",
      equalButton: "#1A2327",
      primaryButton: "#FFE53D",
    },
  },
};
