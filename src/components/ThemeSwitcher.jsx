import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition-colors duration-300"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeSwitcher;
