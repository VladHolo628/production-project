import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "@/Pages/AboutPage";
import { MainPage } from "@/Pages/MainPage";
import classNames from "@/shared/lib/helpers/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Home</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
