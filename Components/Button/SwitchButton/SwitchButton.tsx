import React, { useRef, useState } from "react";
import { ButtonProps } from "../../../Interfaces/Button";
import { ThemeId } from "../../../Styles/Theme";
import { BaseSwitchButton } from "./SwitchButton.elements";

export default function SwitchButton({
  handlePress: baseHandlePress,
}: ButtonProps<ThemeId>) {
  // return 1,2,3
  const themeIndex = useRef(1);
  const [active, setActive] = useState(false);
  const handlePress = () => {
    if (themeIndex.current === 2) {
      themeIndex.current = 0;
    } else {
      themeIndex.current += 1;
    }
    void baseHandlePress(Object.values(ThemeId)[themeIndex.current]);
  };
  return (
    <BaseSwitchButton
      activeOpacity={1}
      active={active}
      onPress={handlePress}
      onPressIn={() => {
        setActive(true);
      }}
      onPressOut={() => setActive(false)}
    />
  );
}
