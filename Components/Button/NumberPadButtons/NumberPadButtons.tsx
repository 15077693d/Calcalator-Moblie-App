import React, { useState } from "react";
import { useCalculatorContext } from "../../../Contexts/CalculatorContext";
import { NumberPadButtonProps } from "../../../Interfaces/Button";
import { Button, Label, Wrapper } from "./NumberPadButtons.elements";

export function NumberPadButton({
  buttonId,
  buttonType,
  label,
  ...args
}: NumberPadButtonProps<void>) {
  const [active, setActive] = useState(false);
  const { handleNumberPadButtonClick } = useCalculatorContext();
  return (
    <Wrapper {...args} buttonType={buttonType}>
      <Button
        onPress={() => handleNumberPadButtonClick(buttonId)}
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
