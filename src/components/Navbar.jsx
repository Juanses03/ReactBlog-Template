import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-2xl font-bold ${
              isActive ? "text-blue-500" : "text-black dark:text-white"
            }`
          }
        >
          Blog
        </NavLink>
        <div className="flex items-center space-x-4">
          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-black dark:text-white ${
                  isActive ? "text-blue-500 bg-blue-100 dark:bg-blue-900" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-black dark:text-white ${
                isActive ? "text-blue-500 bg-blue-100 dark:bg-blue-900" : ""
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-black dark:text-white ${
                isActive ? "text-blue-500 bg-blue-100 dark:bg-blue-900" : ""
              }`
            }
          >
            Register
          </NavLink>
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition-colors duration-300"
          >
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
