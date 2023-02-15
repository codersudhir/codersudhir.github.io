import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './About.css';
import 'animate.css';
import AnimativeName from './AnimativeText/AnimativeName';

const About = () => {


  return (
    <>
    <div  id="about" className="about section">
    <Box p={['3', '4', '4', '4']} mb="4" className="aboutContainer"  >
        <AnimativeName />
        <Heading 
          fontSize={['1.2rem', '1.4rem', '1.6rem', '1.6rem']}
          color="whiteAlpha.700"
          mt="1"
          textAlign={['center', 'center', 'center', 'left']}
          className="fullstackdeveloper"
          id='typing'
        >
          Full Stack Developer
        </Heading>
        <Box
          color="white"
          className="aboutMe"
          ml={['0.5', '0.5', '-0.5', '-20']}
          fontSize={['sm', 'md', 'lg']}
          pt={['2', '2', '3', '4']}
          textAlign="justify"
        >
          <p id="user-detail-name">
            Hi, There! I'm <span id="name">Sudhir Nandane.</span> A Full Stack
             web developer. I spend my whole day, practically every day, experimenting with HTML,
             CSS, and JavaScript , React.js , Next.js , Rest API  and inhaling a wide variety of potentially useless information through a few hundred RSS feeds.
             I build websites that delight and inform. I do it well.
          </p>
          <br />
          <p id="user-detail-intro">
            I love music. All of my music consumption is meticulously catalogued
            on Spotify and I maintain a Spotify playlist. I'm also into gaming
            and photography. I share my photographs on Instagram.
          </p>
        </Box>
      </Box>
    </div>
   
    </>
  );
};

export default About;
