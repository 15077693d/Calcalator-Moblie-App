import styled, { css } from "styled-components/native";

export const Logo = styled.Text`
  ${({ theme: { color, font } }) =>
    css`
      color: ${color.text.abroveNumberPadText};
      font: ${font.logo};
      transform: translateX(10px);
    `}
`;

export const LogoAndThemeSwitchWrapper = styled.View`
  width: 327px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.View`
  width: 328px;
  height: 610px;
  justify-content: space-between;
`;

export const Background = styled.View`
  background-color: ${({ theme: { color } }) => color.background.main};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
