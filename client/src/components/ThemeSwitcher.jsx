import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
  useEffect(() => {
    isDarkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDarkMode]);
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
