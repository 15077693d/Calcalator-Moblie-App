import { createContext, ReactChild, useContext } from "react";
import { NumberPadButtonId } from "../Config/NumberPadButton";
import { ComponentProps } from "../Interfaces/Common";

type ContextReturnType = {
  displayValue: string;
  handleNumberPadButtonClick: (numberPadButtonId: NumberPadButtonId) => void;
};

const initalContextReturn = {
  displayValue: "0",
  handleNumberPadButtonClick: () => {
    return;
  },
};

const CalculatorContext = createContext<ContextReturnType>(initalContextReturn);

export const useCalculatorContext = () => useContext(CalculatorContext);

export const CalculatorContextProvider = ({
  children,
}: ComponentProps): ReactChild => {
  return (
    <CalculatorContext.Provider value={initalContextReturn}>
      {children}
    </CalculatorContext.Provider>
  );
};
