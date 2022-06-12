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
          label={"9"}
          handlePress={function (option: number): void {
            console.log("this is 9");
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
          label={"4"}
          handlePress={function (option: number): void {
            console.log("this is 4");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"5"}
          handlePress={function (option: number): void {
            console.log("this is 5");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"6"}
          handlePress={function (option: number): void {
            console.log("this is 6");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"+"}
          handlePress={function (option: number): void {
            console.log("this is +");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"1"}
          handlePress={function (option: number): void {
            console.log("this is 1");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"2"}
          handlePress={function (option: number): void {
            console.log("this is 2");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"3"}
          handlePress={function (option: number): void {
            console.log("this is 3");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"-"}
          handlePress={function (option: number): void {
            console.log("this is -");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"."}
          handlePress={function (option: number): void {
            console.log("this is .");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"0"}
          handlePress={function (option: number): void {
            console.log("this is 0");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"/"}
          handlePress={function (option: number): void {
            console.log("this is /");
          }}
          buttonType={NumberPadButtonType.Primary}
        />
        <NumberPadButton
          label={"x"}
          handlePress={function (option: number): void {
            console.log("this is x");
          }}
          buttonType={NumberPadButtonType.Primary}
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
            console.log("this is equal");
          }}
          buttonType={NumberPadButtonType.Equal}
        />
      </Container>
    </Wrapper>
  );
}
