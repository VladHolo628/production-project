import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./Pages/MainPage/MainPage.async";
import { Suspense } from "react";
import useTheme from "./theme/useTheme";
import classNames from "./helpers/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Home</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
