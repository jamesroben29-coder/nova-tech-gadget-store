import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { navLinks } from "../../common/nav-links";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`overlay ${isOpen ? "overlay-open" : ""}`} 
        onClick={onClose}
      ></div>

      <section className={`menu-links-con ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>

        <h1 className="heading">Nova Tech</h1>

        {navLinks.map((link) => (
          <NavLink 
            className="link-con" 
            key={link.label} 
            to={link.href}
            onClick={onClose}
          >
            {link.label}
          </NavLink>
        ))}

        <NavLink className="link-con" to="/signin" onClick={onClose}>
          Sign In
        </NavLink>

        <NavLink className="link-con" to="/signup" onClick={onClose}>
          Sign Up
        </NavLink>

        <ThemeToggle />
      </section>
    </>
  );
};

export default Menu;
