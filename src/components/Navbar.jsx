import React, { useContext } from "react";
import { Link } from "react-scroll/modules";
import "./nav.css";
import { ThemeContext } from "../context/ThemeContext";
import Toggle from "./Toggle";
const Navbar = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <ul className="topnav">
        { <Toggle/> }
        <li>
          <div onClick={toggleTheme} className="button">
         { !isLight?<i class="fa-solid fa-sun"></i>:
          <i class="fa-solid fa-moon"></i>}
          </div>
        </li>
        <li>
          <Link to="header">Home</Link>
        </li>
        <li>
          <Link to="profile">About</Link>
        </li>
        <li>
          <Link to="skills">Projects</Link>
        </li>
        <li>
          <Link to="project">Skills</Link>
        </li>
        <li>
          <Link to="footer">Contact</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;