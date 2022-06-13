import { NumberPadButtonType } from "../../Interfaces/Button";
import { NumberPadButton } from "./NumberPadButton";

export enum NumberPadButtonId {
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Delete = "DEL",
  Four = "4",
  Five = "5",
  Six = "6",
  Plus = "+",
  One = "1",
  Two = "2",
  Three = "3",
  Subtract = "-",
  Point = ".",
  Zero = "0",
  Division = "/",
  Multiple = "x",
  Reset = "RESET",
  Equal = "=",
}

export const NUMBER_PAD_BUTTONS: {
  [id in NumberPadButtonId]: NumberPadButton;
} = {
  [NumberPadButtonId.Seven]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Seven,
    NumberPadButtonId.Seven
  ),
  [NumberPadButtonId.Eight]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Eight,
    NumberPadButtonId.Eight
  ),
  [NumberPadButtonId.Nine]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Nine,
    NumberPadButtonId.Nine
  ),
  [NumberPadButtonId.Delete]: new NumberPadButton(
    NumberPadButtonType.Delete,
    NumberPadButtonId.Delete,
    NumberPadButtonId.Delete
  ),
  [NumberPadButtonId.Four]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Four,
    NumberPadButtonId.Four
  ),
  [NumberPadButtonId.Five]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Five,
    NumberPadButtonId.Five
  ),
  [NumberPadButtonId.Six]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Six,
    NumberPadButtonId.Six
  ),
  [NumberPadButtonId.Plus]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Plus,
    NumberPadButtonId.Plus
  ),
  [NumberPadButtonId.One]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.One,
    NumberPadButtonId.One
  ),
  [NumberPadButtonId.Two]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Two,
    NumberPadButtonId.Two
  ),
  [NumberPadButtonId.Three]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Three,
    NumberPadButtonId.Three
  ),
  [NumberPadButtonId.Subtract]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Subtract,
    NumberPadButtonId.Subtract
  ),
  [NumberPadButtonId.Point]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Point,
    NumberPadButtonId.Point
  ),
  [NumberPadButtonId.Zero]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Zero,
    NumberPadButtonId.Zero
  ),
  [NumberPadButtonId.Division]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Division,
    NumberPadButtonId.Division
  ),
  [NumberPadButtonId.Multiple]: new NumberPadButton(
    NumberPadButtonType.Primary,
    NumberPadButtonId.Multiple,
    NumberPadButtonId.Multiple
  ),
  [NumberPadButtonId.Reset]: new NumberPadButton(
    NumberPadButtonType.Reset,
    NumberPadButtonId.Reset,
    NumberPadButtonId.Reset
  ),
  [NumberPadButtonId.Equal]: new NumberPadButton(
    NumberPadButtonType.Equal,
    NumberPadButtonId.Equal,
    NumberPadButtonId.Equal
  ),
};
