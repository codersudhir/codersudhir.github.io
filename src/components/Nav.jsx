import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import "./navbar.css";
import Resume from "./Resume.pdf"
const Nav = () => {
    const [click,setClick]=useState(true)

  return (
    <div id="nav-menu">
       <div className={click?'topnav':'topnav responsive'}>
        <Link className="a nav-link home"     to="home">Home</Link>
        <Link className="a nav-link about"    to="profile">About</Link>
        <Link className="a nav-link projects" to="projects">Projects</Link>
        <Link className="a nav-link skills"   to="skills">Skills</Link>
        <Link className="a nav-link contact"  to="contact">Contact</Link>
        <a id="resume-button-1" className="nav-link resume" href={Resume} download="Parag_Resume">RESUME</a>
      </div>
    </div>
  );
};

export default Nav;
