import React from "react";
import { NumberPadButton } from "../../Components/Button/NumberPadButtons/NumberPadButtons";
import { NumberPadButtonType } from "../../Interfaces/Button";
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
        <NumberPadButton
          label={"7"}
          handlePress={function (option: number): void {
            console.log("this is 7");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"8"}
          handlePress={function (option: number): void {
            console.log("this is 8");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <NumberPadButton
          label={"DEL"}
          handlePress={function (option: number): void {
            console.log("this is delete");
          }}
          buttonType={NumberPadButtonType.Delete}
        />
        <ResetButton
          label={"RESET"}
          handlePress={function (option: number): void {
            console.log("this is reset");
          }}
          buttonType={NumberPadButtonType.Reset}
        />
        <EqualButton
          label={"="}
          handlePress={function (option: number): void {
            console.log("this is reset");
          }}
          buttonType={NumberPadButtonType.Equal}
        />
      </Container>
    </Wrapper>
  );
}
