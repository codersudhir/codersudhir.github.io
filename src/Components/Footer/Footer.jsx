import React from 'react'
import "./footer.css";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SUDHIR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#stats">Stats & Calender</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">

        <a href="https://github.com/codersudhir"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/sudhir-nandane-38843212a/"><BsLinkedin/></a>
        <a href="https://github.com/codersudhir"><BsTwitter/></a>
      </div>


      <div className="footer__copyright">
        <small>&copy; Sudhir's Porfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
