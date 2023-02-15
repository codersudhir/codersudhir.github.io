import { Box, Container, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import profilePic from "../images/profile-pic.jpg"
import About from './about/About';
import Graph from './github_graph/Graph';
import Projects from '../projects/Projects';
import Contact from './Contact';
import Skills from './Skills';
const Home = () => {
  return (
    < >
    <div id="home"></div>

      <Flex w="100vw" flexWrap="wrap" >
        <Container>
          <Box boxSize={['sm', 'md', 'md', 'md']} m={['4', '4', '4', '8']}>
            <Image
            class="home-img"
              src={profilePic}
              alt="sudhir"
              w={['80vw', '85vw', '90vw', '40vw']}
              ml={["2","3","4","4"]}
            />
          </Box>
        </Container>
        <Container>
          <About />
        </Container>
      </Flex>
      <Skills/>
      <Projects/>
      <Graph/>
      <Contact/>
    </>
  );
};

export default Home;
