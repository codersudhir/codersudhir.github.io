import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sudhir-nandane-38843212a/"
        target="_blank"
      >
        <BsLinkedin className="icon" />
      </a>
      <a href="https://github.com/codersudhir" target="_blank">
        <FaGithub  className="icon"/>
      </a>
      <a href="https://twitter.com/sudhirnandane" target="_blank">
        <BsTwitter className="icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
