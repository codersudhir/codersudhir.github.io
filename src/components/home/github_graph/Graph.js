import React, { useEffect } from 'react';
import GithubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar-responsive.css';
import 'github-calendar/dist/github-calendar.min.js';
import { Box, Text ,Image } from '@chakra-ui/react';
import state from "./state.png"
import './Graph.css';


const Graph = () => {
  useEffect(() => {
    GithubCalendar('.calendar', 'rwiteshbera', {
      tooltips: true,
      responsive: true,
    });
  }, []);
  return (
    <>
      <Box className="contribution-graph" id='github-graph'>
        <Text
          textAlign="center"
          fontSize={['1.2rem', '1.4rem', '1.6rem', '2rem']}
          fontWeight="semibold"
          color="white"
        >
         <p1 style={{fontSize:"36px",textAlign:"center"}}>Github Contribution Calender</p1>
        </Text>
        <div className="calendar" w="100vw"></div>
      </Box>
      <p1 style={{fontSize:"36px",textAlign:"center",color:"white",width:"100%"}}>Github Stats</p1>
      <Image src={state} />
      <Box height={"10"}>
        
      </Box>
      
    </>
  );
};

export default Graph;
