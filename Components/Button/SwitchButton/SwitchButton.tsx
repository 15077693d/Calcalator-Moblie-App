import React, { useState } from "react";
import { BaseSwitchButton } from "./SwitchButton.elements";
export default function SwitchButton() {
  const [active, setActive] = useState(false);
  return (
    <BaseSwitchButton
      activeOpacity={1}
      active={active}
      onPressIn={() => {
        setActive(true);
      }}
      onPressOut={() => setActive(false)}
    />
  );
}
