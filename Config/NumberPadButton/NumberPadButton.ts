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

  process(previousValue: string): string {
    if (this.id === NumberPadButtonId.Reset) {
      return "0";
    } else if (this.id === NumberPadButtonId.Delete) {
      if (previousValue === "0") {
        return "0";
      } else {
        return previousValue.slice(0, previousValue.length - 1);
      }
    } else if (this.id === NumberPadButtonId.Point) {
      if (previousValue.includes(".")) {
        return previousValue;
      } else if (previousValue[previousValue.length - 1] === ".") {
        return previousValue;
      } else {
        return previousValue + ".";
      }
    } else if (
      [
        NumberPadButtonId.Zero,
        NumberPadButtonId.One,
        NumberPadButtonId.Two,
        NumberPadButtonId.Three,
        NumberPadButtonId.Four,
        NumberPadButtonId.Five,
        NumberPadButtonId.Six,
        NumberPadButtonId.Seven,
        NumberPadButtonId.Eight,
        NumberPadButtonId.Nine,
      ].includes(this.id)
    ) {
      if (previousValue === "0") {
        return this.label;
      } else {
        return previousValue + this.label;
      }
    }
    return previousValue;
  }
}
