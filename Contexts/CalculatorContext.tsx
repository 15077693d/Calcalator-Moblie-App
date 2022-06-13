import {
  createContext,
  ReactElement,
  useContext,
  useRef,
  useState,
} from "react";
import {
  NumberPadButtonId,
  NUMBER_PAD_BUTTONS,
} from "../Config/NumberPadButton";
import { ComponentProps } from "../Interfaces/Common";
import { commify } from "../Utils/displayValue";

type ContextReturnType = {
  displayValue: string;
  handleNumberPadButtonClick: (buttonId: NumberPadButtonId) => void;
};

const initalContextReturn = {
  value: "0",
  displayValue: "0",
  handleNumberPadButtonClick: () => {
    return;
  },
};

const CalculatorContext = createContext<ContextReturnType>(initalContextReturn);

CalculatorContext.displayName = "CalculatorContext";

export const useCalculatorContext = () => useContext(CalculatorContext);

export const CalculatorContextProvider = ({
  children,
}: ComponentProps): ReactElement => {
  const value = useRef("0");
  const [displayValue, setDisplayValue] = useState("0");
  const handleNumberPadButtonClick = (buttonId: NumberPadButtonId) => {
    const previousValue = value.current;
    const latestValue = NUMBER_PAD_BUTTONS[buttonId].process(
      previousValue.toString()
    );
    value.current = latestValue;
    setDisplayValue(commify(value.current));
  };
  return (
    <CalculatorContext.Provider
      value={{ displayValue, handleNumberPadButtonClick }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
