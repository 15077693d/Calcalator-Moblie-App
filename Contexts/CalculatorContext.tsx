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
  const answer = useRef("0");
  const value = useRef("0");
  const [displayValue, setDisplayValue] = useState("0");
  const [activeOperator, setActiveOperator] =
    useState<null | NumberPadButtonId>(null);

  const operateNumber = () => {
    switch (activeOperator) {
      case NumberPadButtonId.Plus:
        answer.current = (
          Number(value.current) + Number(answer.current)
        ).toString();
        break;
      case NumberPadButtonId.Subtract:
        answer.current = (
          Number(answer.current) - Number(value.current)
        ).toString();
        break;
      case NumberPadButtonId.Multiple:
        answer.current = (
          Number(answer.current) * Number(value.current)
        ).toString();
        break;
      case NumberPadButtonId.Division:
        answer.current = (
          Number(answer.current) / Number(value.current)
        ).toString();
        break;
      default:
        break;
    }
  };
  const handleNumberPadButtonClick = (buttonId: NumberPadButtonId) => {
    // 1,2,3,4,5,6,7,8,9,0,.
    const previousValue = value.current;
    let latestValue = NUMBER_PAD_BUTTONS[buttonId].process(
      previousValue.toString()
    );
    if (buttonId === NumberPadButtonId.Reset) {
      answer.current = "0";
      value.current = latestValue;
      setDisplayValue(commify(value.current));
    } else if (buttonId === NumberPadButtonId.Equal) {
      // 1. operate value to answer
      operateNumber();
      // 2. set value to 0: user enter new input
      value.current = "0";
      setActiveOperator(null);
      setDisplayValue(commify(answer.current));
    } else if (
      [
        NumberPadButtonId.Plus,
        NumberPadButtonId.Subtract,
        NumberPadButtonId.Multiple,
        NumberPadButtonId.Division,
      ].includes(buttonId)
    ) {
      // 1. operate value to answer
      if (answer.current === "0") {
        answer.current = value.current;
      } else {
        operateNumber();
      }
      // 2. set value to 0: user enter new input
      value.current = "0";
      // 3. setActiveOperator
      setActiveOperator(buttonId);
      // activeOperator != null ->  display
      if (activeOperator != null) {
        setDisplayValue(commify(answer.current));
      }
    } else {
      value.current = latestValue;
      setDisplayValue(commify(value.current));
    }
  };
  return (
    <CalculatorContext.Provider
      value={{ displayValue, handleNumberPadButtonClick }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
