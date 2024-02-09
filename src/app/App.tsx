import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import classNames from "@/shared/lib/helpers/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
