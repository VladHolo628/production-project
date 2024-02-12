import {useContext} from 'react';
import ThemeContext, {LOCAL_STORAGE_THEME_KEY, THEME} from './ThemeContext';

export type UseThemeResult = {
  toggleTheme: () => void;
  theme: THEME;
};

const useTheme = (): UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return {theme, toggleTheme};
};

export default useTheme;
