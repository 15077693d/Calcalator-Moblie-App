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
  displayValue: string | null;
  value1: string | null;
  value2: string | null;
  answer: string | null;
  operator: NumberPadButtonId | null;
  handleNumberPadButtonClick: (buttonId: NumberPadButtonId) => void;
};

const initalContextReturn = {
  displayValue: null,
  value1: null,
  value2: null,
  answer: null,
  operator: null,
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
  const value1 = useRef<null | string>(null);
  const value2 = useRef<null | string>(null);
  const answer = useRef<null | string>(null);
  const operator = useRef<null | NumberPadButtonId>(null);
  const [displayValue, setDisplayValue] = useState<null | string>(null);

  const calculateAnswer = () => {
    switch (operator.current) {
      case NumberPadButtonId.Plus:
        answer.current = (
          Number(value1.current) + Number(value2.current)
        ).toString();
        break;
      case NumberPadButtonId.Subtract:
        answer.current = (
          Number(value1.current) - Number(value2.current)
        ).toString();
        break;
      case NumberPadButtonId.Multiple:
        answer.current = (
          Number(value1.current) * Number(value2.current)
        ).toString();
        break;
      case NumberPadButtonId.Division:
        answer.current = (
          Number(value1.current) / Number(value2.current)
        ).toString();
        break;
      default:
        break;
    }
  };

  const handleNumberPadButtonClick = (buttonId: NumberPadButtonId) => {
    // let latestValue = NUMBER_PAD_BUTTONS[buttonId].process(
    //   previousValue.toString()
    // );
    // reset
    if (buttonId === NumberPadButtonId.Reset) {
      value1.current = null;
      value2.current = null;
      answer.current = null;
      operator.current = null;
      setDisplayValue(null);
    }
    // Operator + - * /
    else if (
      [
        NumberPadButtonId.Plus,
        NumberPadButtonId.Subtract,
        NumberPadButtonId.Multiple,
        NumberPadButtonId.Division,
        NumberPadButtonId.Equal,
      ].includes(buttonId)
    ) {
      if (
        value1.current !== null &&
        value2.current !== null &&
        operator.current !== null
      ) {
        calculateAnswer();
        value2.current = null;
        value1.current = answer.current;
        if (buttonId != NumberPadButtonId.Equal) {
          operator.current = buttonId;
        } else {
          operator.current = null;
        }
        setDisplayValue(commify(answer.current || "0"));
      } else {
        if (buttonId === NumberPadButtonId.Subtract) {
          // user click - and value1 is null set -
          if (value1.current == null) {
            value1.current = "-";
            setDisplayValue(commify(value1.current));
          } else if (operator.current === null) {
            operator.current = NumberPadButtonId.Subtract;
            // user click - and value 1 is not null and  operator is not null
          } else if (value2.current === null) {
            value2.current = "-";
          }
        } else if (
          value1.current != null &&
          buttonId != NumberPadButtonId.Equal
        ) {
          operator.current = buttonId;
        }
      }
    } else {
      //1234567890.del
      // operator is null -> value1
      if (operator.current === null) {
        const newValue1 = NUMBER_PAD_BUTTONS[buttonId].process(
          value1.current || "0"
        );
        value1.current = newValue1;
        setDisplayValue(newValue1);
      } else {
        const newValue2 = NUMBER_PAD_BUTTONS[buttonId].process(
          value2.current || "0"
        );
        value2.current = newValue2;
        setDisplayValue(newValue2);
      }
      if (buttonId === NumberPadButtonId.Delete) {
        operator.current = null;
      }
    }
  };
  return (
    <CalculatorContext.Provider
      value={{
        displayValue,
        value1: value1.current,
        value2: value2.current,
        answer: answer.current,
        operator: operator.current,
        handleNumberPadButtonClick,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
