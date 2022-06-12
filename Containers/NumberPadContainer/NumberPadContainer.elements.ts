import styled, { css } from "styled-components/native";
import { NumberPadButton } from "../../Components/Button/NumberPadButtons/NumberPadButtons";

export const Wrapper = styled.View`
  ${({ theme: { color, borderRadius } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${borderRadius.medium};
    background-color: ${color.background.switchAndNumberPad};
    width: 327px;
    height: 420px;
  `}
`;
export const Container = styled.View`
  ${() => css`
    display: grid;
    grid-gap: 15px;
    grid-template-rows: repeat(5, 64px);
    grid-template-columns: repeat(4, 60px);
  `}
`;

export const ResetButton = styled(NumberPadButton)`
  grid-area: 5/1/5/3;
`;

export const EqualButton = styled(NumberPadButton)`
  grid-area: 5/3/5/5;
`;
