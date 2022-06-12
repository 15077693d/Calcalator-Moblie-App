import styled, { css } from "styled-components/native";
import {
  BaseNumberPadButtonProps,
  NumberPadButtonType,
} from "../../../Interfaces/Button";

export const Wrapper = styled.View<BaseNumberPadButtonProps>`
  ${({ theme: { color, borderRadius }, buttonType }) => {
    // width
    const selectedWidth =
      buttonType === NumberPadButtonType.Reset ||
      buttonType === NumberPadButtonType.Equal
        ? "135px"
        : "60px";
    // background color
    let selectedBackgroundColor = color.buttonShadow.primary;
    if (
      buttonType === NumberPadButtonType.Delete ||
      buttonType === NumberPadButtonType.Reset
    ) {
      selectedBackgroundColor = color.buttonShadow.resetAndDelete;
    } else if (buttonType === NumberPadButtonType.Equal) {
      selectedBackgroundColor = color.buttonShadow.equalAndSwitch;
    }
    return css`
      width: ${selectedWidth};
      height: 64px;
      background-color: ${selectedBackgroundColor};
      border-radius: ${borderRadius.small};
    `;
  }}
`;

export const Label = styled.Text<BaseNumberPadButtonProps>`
  ${({ theme: { font, color }, buttonType }) => {
    // text color
    let selectedColor = color.text.primaryButton;
    if (
      buttonType === NumberPadButtonType.Delete ||
      buttonType === NumberPadButtonType.Reset
    ) {
      selectedColor = color.text.resetAndDeleteButton;
    } else if (buttonType === NumberPadButtonType.Equal) {
      selectedColor = color.text.equalButton;
    }
    return css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color:${selectedColor}
      font: ${
        buttonType === "Primary"
          ? font.button.primary
          : font.button.resetAndDeleteAndEqual
      };
    `;
  }}
`;

export const Button = styled.TouchableOpacity<BaseNumberPadButtonProps>`
  ${({ theme: { color, borderRadius }, buttonType, active = false }) => {
    // width
    const selectedWidth =
      buttonType === NumberPadButtonType.Reset ||
      buttonType === NumberPadButtonType.Equal
        ? "135px"
        : "60px";
    // background color
    let selectedBackgroundColor = active
      ? color.button.primary.active
      : color.button.primary.normal;
    if (
      buttonType === NumberPadButtonType.Delete ||
      buttonType === NumberPadButtonType.Reset
    ) {
      selectedBackgroundColor = active
        ? color.button.resetAndDelete.active
        : color.button.resetAndDelete.normal;
    } else if (buttonType === NumberPadButtonType.Equal) {
      selectedBackgroundColor = active
        ? color.button.equalAndSwitch.active
        : color.button.equalAndSwitch.normal;
    }
    // color
    let selectedTextColor = color.text.primaryButton;
    if (
      buttonType === NumberPadButtonType.Delete ||
      buttonType === NumberPadButtonType.Reset
    ) {
      selectedTextColor = color.text.resetAndDeleteButton;
    } else if (buttonType === NumberPadButtonType.Equal) {
      selectedTextColor = color.text.equalButton;
    }
    return css`
      color: ${selectedTextColor};
      width: ${selectedWidth};
      height: 60px;
      background-color: ${selectedBackgroundColor};
      border-radius: ${borderRadius.small};
    `;
  }}
`;
