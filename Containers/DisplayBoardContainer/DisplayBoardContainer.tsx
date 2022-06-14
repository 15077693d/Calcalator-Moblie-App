import React from "react";
import { Container, Label } from "./DisplayBoardContainer.elements";

type DisplayBoardContainerProps = {
  label: string;
};
export default function DisplayBoardContainer({
  label,
}: DisplayBoardContainerProps) {
  return (
    <Container>
      <Label onLayout={(e) => console.log(e)}>{label}</Label>
    </Container>
  );
}
