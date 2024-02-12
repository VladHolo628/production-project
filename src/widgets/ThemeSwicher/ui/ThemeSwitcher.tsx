import {THEME, useTheme} from '@/app/providers/ThemeProvider';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import {Button} from '@/shared/ui/Button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: IThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button onClick={toggleTheme} className={className}>
      {theme === THEME.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
