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
      <Label>{label}</Label>
    </Container>
  );
}
