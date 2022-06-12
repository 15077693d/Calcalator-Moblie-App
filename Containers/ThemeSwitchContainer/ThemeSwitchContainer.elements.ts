import styled, { css } from "styled-components/native";
import SwitchButton from "../../Components/Button/SwitchButton/SwitchButton";
import { ThemeId } from "../../Styles/Theme";

export const Container = styled.View`
  width: 139px;
  height: 42px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const ButtonContainer = styled.View`
  ${({ theme: { color, borderRadius } }) => css`
    display: flex;
    justify-content: center;
    background-color: ${color.background.switchAndNumberPad};
    border-radius: ${borderRadius.large};
    width: 71px;
    height: 26px;
    grid-area: 2/2/3/3;
  `}
`;

type MoveableSwitchButtonProps = {
  activeThemeId: ThemeId;
};
export const MoveableSwitchButton = styled(
  SwitchButton
)<MoveableSwitchButtonProps>`
  ${({ activeThemeId }) => {
    let xValue = "4px";
    if (activeThemeId === ThemeId.Theme2) {
      xValue = "27px";
    } else if (activeThemeId === ThemeId.Theme3) {
      xValue = "51px";
    }
    return css`
      transform: translateX(${xValue});
    `;
  }}
`;

export const LabelWrapper = styled.View`
  width: 71px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  grid-area: 1/2/2/3;
`;

export const Label = styled.Text`
  ${({ theme: { font, color } }) => css`
    font: ${font.themeSwitch};
    color: ${color.text.abroveNumberPadText};
  `}
`;

export const Title = styled(Label)`
  //justify-self: center;
  align-self: center;
  grid-area: 2/1/3/2;
`;
