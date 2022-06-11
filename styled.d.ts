import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      large: string;
      medium: string;
      small: string;
    };
    color: {
      background: {
        main: string;
        switchAndNumberPad: string;
        displayPanel: string;
      };
      button: {
        resetAndDelete: { hover: string; normal: string };
        primary: { hover: string; normal: string };
        equalAndSwitch: { hover: string; normal: string };
      };
      buttonShadow: { resetDelete: string; primary: string };
      text: {
        abroveDisplayBoardText: string;
        resetAndDeleteButton: string;
        equalButton: string;
      };
    };
  }
}
