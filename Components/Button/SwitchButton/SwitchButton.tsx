import React, { useState } from "react";
import { ButtonProps } from "../../../Interfaces/Button";
import { BaseSwitchButton } from "./SwitchButton.elements";

export default function SwitchButton({
  handlePress,
  ...args
}: ButtonProps<void>) {
  const [active, setActive] = useState(false);
  return (
    <BaseSwitchButton
      {...args}
      activeOpacity={1}
      active={active}
      onPress={() => handlePress()}
      onPressIn={() => {
        setActive(true);
      }}
      onPressOut={() => setActive(false)}
    />
  );
}
