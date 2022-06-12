import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      button: {
        primary: string;
        resetAndDeleteAndEqual: string;
      };
      displayBoard: string;
      themeSwitch: string;
      logo: string;
    };
    fontFamily: string;
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
        resetAndDelete: { active: string; normal: string };
        primary: { active: string; normal: string };
        equalAndSwitch: { active: string; normal: string };
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
