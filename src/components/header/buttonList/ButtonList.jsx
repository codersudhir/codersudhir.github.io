import React from 'react';
import { HStack} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const ButtonList = () => {
 
  return (
    <div id="nav-menu" >
          <div className="button_list" style={{position:"fixed"}}  >
      <HStack marginLeft={"80%"} mt="2" mr="4" className="button_stack"    >
        <Link to="/" className="nav-link home">
          <button  >Home</button>
        </Link>
        <Link to="/skills" className="nav-link skills">
          <button  >Skills</button>
        </Link>
        <Link to="/projects" className="nav-link projects">
          <button >Projects</button>
        </Link>
        <a href="https://docs.google.com/document/d/1_bWH28nOAnBCozL8CrT66WpHO_9jXLN_xWea7NnGeBc/edit" 
        target="_blank" rel='noreferrer' className="nav-link resume"><button >Resume</button></a>
        <Link to="/contact" className="nav-link contact">
          <button >Contact</button>
        </Link>
      </HStack>
    </div>
    </div>

  );
};

export default ButtonList;
