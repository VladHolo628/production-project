import classNames from "@/shared/lib/helpers/classNames";
import React from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}: IAppLinkProps) => {
  return (
    <Link
      className={classNames(cls.AppLink, {}, [cls[theme], className])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
