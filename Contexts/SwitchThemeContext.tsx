import React, { ReactElement, useContext, useState } from "react";
import { ComponentProps } from "../Interfaces/Common";
import { ThemeId } from "../Styles/Theme";

type ContextReturnType = {
  themeId: ThemeId;
  setThemeId: React.Dispatch<React.SetStateAction<ThemeId>>;
};

const initalContextReturnValue = {
  themeId: ThemeId.Theme1,
  setThemeId: () => {
    return;
  },
};

const SwitchThemeContext = React.createContext<ContextReturnType>(
  initalContextReturnValue
);

SwitchThemeContext.displayName = "SwitchThemeContext";

export const useSwitchThemeContext = () => useContext(SwitchThemeContext);

export const SwitchThemeContextProvider = ({
  children,
}: ComponentProps): ReactElement => {
  const [themeId, setThemeId] = useState<ThemeId>(ThemeId.Theme1);
  return (
    <SwitchThemeContext.Provider
      value={{
        themeId,
        setThemeId,
      }}
    >
      {children}
    </SwitchThemeContext.Provider>
  );
};
