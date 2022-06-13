import React, { useState } from "react";
import { NumberPadButtonProps } from "../../../Interfaces/Button";
import { Button, Label, Wrapper } from "./NumberPadButtons.elements";

export function NumberPadButton({
  buttonType,
  label,
  ...args
}: NumberPadButtonProps<void>) {
  const [active, setActive] = useState(false);
  return (
    <Wrapper {...args} buttonType={buttonType}>
      <Button
        onPressIn={() => {
          setActive(true);
        }}
        onPressOut={() => setActive(false)}
        buttonType={buttonType}
        active={active}
        activeOpacity={1}
      >
        <Label buttonType={buttonType}>{label}</Label>
      </Button>
    </Wrapper>
  );
}
