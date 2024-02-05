import { useMemo, useState } from "react";
import { FC } from "react";
import ThemeContext, {
  LOCAL_STORAGE_THEME_KEY,
  THEME,
} from "../lib/ThemeContext";

type ProviderProps = {
  children: React.ReactNode;
};

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) ?? THEME.LIGHT;

const ThemeProvider: FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme);

  const contextValue = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
