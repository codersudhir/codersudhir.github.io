import React from 'react';
import { Flex, IconButton, Link } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import './Socials.css';

const Socials = () => {
  return (
    <>
      <Flex
        justify={['center', 'center', 'center', 'left']}
        gap={['2', '3', '4', '4']} 
      >
        <Link href="https://www.linkedin.com/in/sudhir-nandane-38843212a/" isExternal>
          <IconButton
          backgroundColor= 'black'
          color= 'white'
          border= '2px solid white'
            icon={<FaLinkedinIn />}
            isRound="true"
            _hover={{
              background: 'blue',
              color: 'red',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        <Link href="https://twitter.com/sudhirnandane" isExternal>
          <IconButton
          backgroundColor= 'black'
          color= 'white'
          border= '2px solid white'
            icon={<FaTwitter />}
            isRound="true"
            _hover={{
              background: 'blue',
              color: 'red',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        <Link href="https://github.com/codersudhir" isExternal>
          <IconButton
           backgroundColor= 'black'
              color= 'white'
              border= '2px solid white'
            icon={<FaGithub />}
            isRound="true"
            _hover={{
              background: 'blue',
              color: 'red',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        <Link href="https://www.instagram.com/awesome_sudhir/" isExternal>
          <IconButton
          backgroundColor= 'black'
          color= 'white'
          border= '2px solid white'
            icon={<FaInstagram />}
            isRound="true"
            _hover={{
              background: 'blue',
              color: 'red',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        
      </Flex>
    </>
  );
};

export default Socials;
