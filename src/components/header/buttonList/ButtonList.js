import React from 'react';
import { HStack} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const ButtonList = () => {
 
  return (
    <div className="button_list" style={{position:"fixed"}} id="nav-menu" >
      <HStack marginLeft={"80%"} mt="2" mr="4" className="button_stack"   >
        <Link to="/">
          <button  class="nav-link home">Home</button>
        </Link>
        <Link to="/skills">
          <button  class="nav-link skills">Skills</button>
        </Link>
        <Link to="/projects">
          <button class="nav-link projects">Projects</button>
        </Link>
        <a href="https://docs.google.com/document/d/1_bWH28nOAnBCozL8CrT66WpHO_9jXLN_xWea7NnGeBc/edit" target="_blank" rel='noreferrer'><button class="nav-link resume">Resume</button></a>
        <Link to="/contact">
          <button class="nav-link contact">Contact</button>
        </Link>
      </HStack>
    </div>
  );
};

export default ButtonList;
