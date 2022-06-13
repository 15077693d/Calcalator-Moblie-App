import React from "react";
import { NumberPadButton } from "../../Components/Button/NumberPadButtons/NumberPadButtons";
import {
  NumberPadButtonId,
  NUMBER_PAD_BUTTONS,
} from "../../Config/NumberPadButton";
import {
  Container,
  EqualButton,
  ResetButton,
  Wrapper,
} from "./NumberPadContainer.elements";

export default function NumberPadContainer() {
  return (
    <Wrapper>
      <Container>
        {Object.values(NumberPadButtonId).map((buttonId) => {
          if (buttonId === NumberPadButtonId.Reset) {
            return (
              <ResetButton
                key={`NumberPadButton_${buttonId}`}
                buttonId={buttonId}
                label={NUMBER_PAD_BUTTONS[buttonId].label}
                buttonType={NUMBER_PAD_BUTTONS[buttonId].buttonType}
              />
            );
          } else if (buttonId === NumberPadButtonId.Equal) {
            <EqualButton
              key={`NumberPadButton_${buttonId}`}
              buttonId={buttonId}
              label={NUMBER_PAD_BUTTONS[buttonId].label}
              buttonType={NUMBER_PAD_BUTTONS[buttonId].buttonType}
            />;
          }
          return (
            <NumberPadButton
              key={`NumberPadButton_${buttonId}`}
              buttonId={buttonId}
              label={NUMBER_PAD_BUTTONS[buttonId].label}
              buttonType={NUMBER_PAD_BUTTONS[buttonId].buttonType}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
}
