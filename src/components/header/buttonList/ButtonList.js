import React from 'react';
import { HStack} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const ButtonList = () => {
 
  return (
    <div className="button_list" style={{position:"fixed"}} id="nav-menu" >
      <HStack marginLeft={"80%"} mt="2" mr="4" className="button_stack"   >
        <Link to="/" class="nav-link home">
          <button  >Home</button>
        </Link>
        <Link to="/skills" class="nav-link skills">
          <button  >Skills</button>
        </Link>
        <Link to="/projects" class="nav-link projects">
          <button >Projects</button>
        </Link>
        <a href="https://docs.google.com/document/d/1_bWH28nOAnBCozL8CrT66WpHO_9jXLN_xWea7NnGeBc/edit" target="_blank" rel='noreferrer' class="nav-link resume"><button class="nav-link resume">Resume</button></a>
        <Link to="/contact" class="nav-link contact">
          <button >Contact</button>
        </Link>
      </HStack>
    </div>
  );
};

export default ButtonList;
