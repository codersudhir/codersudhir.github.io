import React from 'react';
import {
  VStack,
  Flex,
  Text,
} from '@chakra-ui/react';
import './Header.css';
import ButtonList from './buttonList/ButtonList';
import MobileMenu from './mobileMenu/MobileMenu';

// import RBLogo from '../images/rb.png';

const Header = () => {
  const Reload = () => {
    window.location.href="/";
  };

  return (
    <>
      <VStack>
        <Flex >
         
          <span className="spacer"></span>
          <MobileMenu />
          <ButtonList width="80" />
        </Flex>
      </VStack>
    </>
  );
};

export default Header;
