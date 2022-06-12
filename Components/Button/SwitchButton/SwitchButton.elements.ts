import styled, { css } from "styled-components/native";

export type BaseSwitchButtonProps = {
  active: boolean;
};
export const BaseSwitchButton = styled.TouchableOpacity<BaseSwitchButtonProps>`
  ${({ theme: { color, borderRadius }, active }) => css`
    border-radius: ${borderRadius.large};
    width: 16px;
    height: 16px;
    background-color: ${active
      ? color.button.equalAndSwitch.active
      : color.button.equalAndSwitch.normal};
  `}
`;
