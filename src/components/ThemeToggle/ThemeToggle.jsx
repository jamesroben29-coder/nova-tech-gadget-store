import React from "react";
import Moon from "../../assets/icons/MoonIcon"
import Sun from "../../assets/icons/Sun";
import "./ThemeToggle.css";
import { useTheme } from "../../context/ThemeContext";


const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme();

  return <button className="theme-toggle-btn"
      onClick={toggleTheme}
    >
    {theme === "light" ? <Moon/> : <Sun/>}
  </button>
  
};

export default ThemeToggle;
