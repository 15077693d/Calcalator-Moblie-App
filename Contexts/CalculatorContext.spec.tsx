import { act, renderHook } from "@testing-library/react-hooks";
import { NumberPadButtonId } from "../Config/NumberPadButton";
import { ComponentProps } from "../Interfaces/Common";
import {
  CalculatorContextProvider,
  useCalculatorContext,
} from "./CalculatorContext";
const renderHookWithWrapper = () =>
  renderHook(() => useCalculatorContext(), {
    wrapper: ({ children }: ComponentProps) => (
      <CalculatorContextProvider>{children}</CalculatorContextProvider>
    ),
  });
describe("CalculatorContext init or click once", () => {
  // clickedButton displayedValue value1 value2 answer activeSymbol
  it("init null null null null null", () => {
    const { result } = renderHookWithWrapper();
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: null,
      value1: null,
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("1 1 1 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "1",
      value1: "1",
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("- null null null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Subtract);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "-",
      value1: "-",
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("x null null null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Multiple);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: null,
      value1: null,
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("reset null null null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Reset);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: null,
      value1: null,
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("del null null null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Delete);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: null,
      value1: null,
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it(". null null null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Point);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "0.",
      value1: "0.",
      value2: null,
      answer: null,
      operator: null,
    });
  });
});

describe("CalculatorContext click two", () => {
  it("(1,+) 1 1 null null +", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Plus);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "1",
      value1: "1",
      value2: null,
      answer: null,
      operator: "+",
    });
  });
  it("(1,del) null null null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Delete);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: null,
      value1: null,
      value2: null,
      answer: null,
      operator: null,
    });
  });

  it("(1,0) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "10",
      value1: "10",
      value2: null,
      answer: null,
      operator: null,
    });
  });

  it("(.,0) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Point);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "0.0",
      value1: "0.0",
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("(del,0) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Delete);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "0",
      value1: "0",
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("(-,0) 0 0 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Subtract);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "0",
      value1: "0",
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("(3,reset) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Three);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Reset);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: null,
      value1: null,
      value2: null,
      answer: null,
      operator: null,
    });
  });
});

describe("CalculatorContext click three", () => {
  it("(1,+,1) 1 1 1 null +", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Plus);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "1",
      value1: "1",
      value2: "1",
      answer: null,
      operator: "+",
    });
  });
  it("(1,del,2) null null null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Delete);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Two);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "2",
      value1: "2",
      value2: null,
      answer: null,
      operator: null,
    });
  });

  it("(1,0,0) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "100",
      value1: "100",
      value2: null,
      answer: null,
      operator: null,
    });
  });

  it("(.,0,5) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Point);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Five);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "0.05",
      value1: "0.05",
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("(del,0,1) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Delete);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "1",
      value1: "1",
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("(-,0,1) 1 1 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Subtract);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "1",
      value1: "1",
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("(3,reset,3) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Three);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Reset);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Three);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "3",
      value1: "3",
      value2: null,
      answer: null,
      operator: null,
    });
  });
});

describe("CalculatorContext click four", () => {
  it("(1,+,1,-) 1 1 1 null +", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Plus);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Subtract);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "2",
      value1: "2",
      value2: null,
      answer: "2",
      operator: "-",
    });
  });
  it("(1,del,2,+) 2 2 null null +", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Delete);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Two);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Plus);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "2",
      value1: "2",
      value2: null,
      answer: null,
      operator: "+",
    });
  });

  it("(1,0,0,/) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Division);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "100",
      value1: "100",
      value2: null,
      answer: null,
      operator: "/",
    });
  });

  it("(.,0,5,+) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Point);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Five);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Plus);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "0.05",
      value1: "0.05",
      value2: null,
      answer: null,
      operator: "+",
    });
  });
  it("(del,0,1,2) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Delete);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Two);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "12",
      value1: "12",
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("(-,0,1,del) 1 1 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Subtract);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Zero);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Delete);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: null,
      value1: null,
      value2: null,
      answer: null,
      operator: null,
    });
  });
  it("(3,reset,3,/) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Three);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Reset);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Three);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Division);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "3",
      value1: "3",
      value2: null,
      answer: null,
      operator: "/",
    });
  });
  it("(1,x,3,=,-,6,=) 10 10 null null null", () => {
    const { result } = renderHookWithWrapper();
    act(() => {
      result.current.handleNumberPadButtonClick(NumberPadButtonId.One);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Multiple);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Three);
      result.current.handleNumberPadButtonClick(NumberPadButtonId.Equal);
    });
    const { displayValue, value1, value2, answer, operator } = result.current;
    expect({ displayValue, value1, value2, answer, operator }).toEqual({
      displayValue: "3",
      value1: "3",
      value2: null,
      answer: "3",
      operator: null,
    });
  });
});
