import React, { useState } from "react";
import { NumberPadButtonProps } from "../../../Interfaces/Button";
import {
  BaseNumberPadButton,
  BaseNumberPadButtonWrapper,
  BaseNumberPadLabel,
} from "./NumberPadButtons.elements";

export function NumberPadButton({
  buttonType,
  label,
  handlePress,
}: NumberPadButtonProps) {
  const [active, setActive] = useState(false);
  return (
    <BaseNumberPadButtonWrapper buttonType={buttonType}>
      <BaseNumberPadButton
        onPress={handlePress}
        onPressIn={() => setActive(true)}
        onPressOut={() => setActive(false)}
        buttonType={buttonType}
        active={active}
        activeOpacity={1}
      >
        <BaseNumberPadLabel buttonType={buttonType}>{label}</BaseNumberPadLabel>
      </BaseNumberPadButton>
    </BaseNumberPadButtonWrapper>
  );
}
