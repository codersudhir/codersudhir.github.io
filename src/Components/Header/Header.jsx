import React from 'react';
import "./header.css";
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import AnimativeName from './Animative';
import { Center, Heading } from '@chakra-ui/react';
import Disignation from "./Desinationchanger.css"

const Header = () => {
  return (
    <header id="home" >
        <div className="container header__container">
        <div className='inner-container'>
        <h5>Hello I'am</h5>
          <AnimativeName/>
          <Center>
          <Heading 
          fontSize={['1.2rem', '1.4rem', '1.6rem', '1.6rem']}
          color="#4eb4fc"
          mt="20px"
          

          textAlign={['center', 'center', 'center', 'left']}
          className="fullstackdeveloper"
          id='typing'
        >
          Full Stack Developer
        </Heading></Center>
          <CTA/>
          <HeaderSocials/>
        </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
