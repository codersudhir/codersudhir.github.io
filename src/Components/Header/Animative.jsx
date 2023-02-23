import React from 'react'
import { Center, Heading } from '@chakra-ui/react';
import "./AnimatedName.css";

const AnimativeName = () => {
  return (
    <Center padding={2}>
    <Heading  marginTop={"20px"}
          fontSize={['2rem', '2.4rem', '2.6rem', '2.4rem']}
          color="White"
          id="text-drop"
        >
          <div className='r'>S</div>
          <div className='w'>u</div>
          <div className='i'>d</div>
          <div className='t'>h</div>
          <div className='e'>i</div>
          <div className='s'>r</div>
          <div className='space'></div>
          <div className='b'>N</div>
          <div className='e'>a</div>
          <div className='r'>n</div>
          <div className='a'>d</div>
          <div className='e'>a</div>
          <div className='t'>n</div>
          <div className='r'>e</div>

        </Heading></Center>
  )
}

export default AnimativeName