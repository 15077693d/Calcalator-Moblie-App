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
        displayBoard: string;
      };
      button: {
        resetAndDelete: { hover: string; normal: string };
        primary: { hover: string; normal: string };
        equalAndSwitch: { hover: string; normal: string };
      };
      buttonShadow: {
        resetAndDelete: string;
        equalAndSwitch: string;
        primary: string;
      };
      text: {
        abroveNumberPadText: string;
        resetAndDeleteButton: string;
        equalButton: string;
        primaryButton: string;
      };
    };
  }
}
