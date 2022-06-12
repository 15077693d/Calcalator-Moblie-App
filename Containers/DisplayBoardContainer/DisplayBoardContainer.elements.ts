import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { borderRadius, color } }) => css`
    display: flex;
    justify-content: center;
    background-color: ${color.background.displayBoard};
    border-radius: ${borderRadius.medium};
    width: 327px;
    height: 88px;
    padding: 19px;
  `}
`;

export const Label = styled.Text`
  ${({ theme: { color, font } }) => css`
    text-align: right;
    font: ${font.displayBoard};
    color: ${color.text.abroveNumberPadText};
  `}
`;
