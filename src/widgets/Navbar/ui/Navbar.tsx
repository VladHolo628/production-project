import { ThemeSwitcher } from "@/widgets/ThemeSwicher/ui/ThemeSwitcher";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";

export const Navbar = () => {
  return (
    <div className={cls.Navbar}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          Home
        </AppLink>
      </div>
    </div>
  );
};
