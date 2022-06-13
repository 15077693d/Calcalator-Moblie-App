import { NumberPadButtonId } from ".";
import { NumberPadButtonType } from "../../Interfaces/Button";

export class NumberPadButton {
  readonly buttonType: NumberPadButtonType;
  readonly label: string;
  readonly id: NumberPadButtonId;
  constructor(
    buttonType: NumberPadButtonType,
    label: string,
    id: NumberPadButtonId
  ) {
    this.buttonType = buttonType;
    this.label = label;
    this.id = id;
  }
}
