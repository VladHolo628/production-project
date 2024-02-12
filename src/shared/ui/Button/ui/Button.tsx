import classNames from '@/shared/lib/helpers/classNames';
import React from 'react';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button = ({
  children,
  className,
  theme = ButtonTheme.CLEAR,
  ...otherProps
}: IButtonProps) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
