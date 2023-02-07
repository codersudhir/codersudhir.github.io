import React from 'react'
import {Grid,GridItem,Center,Box,Image} from '@chakra-ui/react'
import html from "./skillsimg/html.jpg"
import css from "./skillsimg/css.png"
import js from "./skillsimg/js.png"
import react from "./skillsimg/react.png"
import chkraui from "./skillsimg/chkraui.png"
import nextjs from "./skillsimg/nextjs.jpg"
import redux from "./skillsimg/redux.png"
import bootstrap from "./skillsimg/bootstrap.jpg"
import storybook from "./skillsimg/storybook.jpg"
import cypress from "./skillsimg/cypress.png"
import python from "./skillsimg/python.png"
import nodejs from "./skillsimg/nodejs.jpg"
import express from "./skillsimg/express.png"
import mongodb from "./skillsimg/mongodb.png"
import git from "./skillsimg/git.png"
import typescript from "./skillsimg/typescript.png"
const Skills = () => {
  return (
    <div style={{color:"white"}} id="skills">
     <h1 style={{fontSize:"40px",textAlign:"center"}}>Skills</h1>
        <Center w="100vw">
          <Grid className="projects_grid" m="10">
              <GridItem style={{display:"flex"}}   >
              <Box  style={{marginRight:"5%",marginLeft:"5%"}}  _hover={{
              background: 'blue',
              color: 'white',
              border: '5px solid',
            }} >
                    <Image width={"150px"} src={html}  />
                </Box>

                <Box style={{marginRight:"5%",marginLeft:"5%"}}  _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }}>
                    <Image width={"150px"} src={css} />
                </Box>
              </GridItem>

              <GridItem style={{display:"flex"}}  >
              <Box  style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={js} />
                </Box>
                <Box style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={react} />
                </Box>
              </GridItem>

              <GridItem style={{display:"flex"}}   >
              <Box  style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={redux} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} />
                </Box>
                <Box style={{marginRight:"5%",marginLeft:"5%"}} >
                    <Image width={"150px"} src={nextjs} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} />
                </Box>
              </GridItem>

              <GridItem style={{display:"flex"}}  >
              <Box  style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={chkraui}  />
                </Box>
                <Box style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={bootstrap} />
                </Box>
              </GridItem>

              <GridItem style={{display:"flex"}}  >
              <Box  style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={storybook} />
                </Box>
                <Box style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={typescript} />
                </Box>
              </GridItem>


              <GridItem style={{display:"flex"}}   >
              <Box  style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={python} />
                </Box>
                <Box style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={nodejs} />
                </Box>
              </GridItem>


              <GridItem style={{display:"flex"}}  >
              <Box  style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={express} />
                </Box>
                <Box style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={mongodb} />
                </Box>
              </GridItem>


              <GridItem style={{display:"flex"}}  >
              <Box  style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={git} />
                </Box>
                <Box style={{marginRight:"5%",marginLeft:"5%"}} _hover={{
              background: 'blue',
              color: 'red',
              border: '5px solid white',
            }} >
                    <Image width={"150px"} src={cypress} />
                </Box>
              </GridItem>
          </Grid>
        </Center>
    </div>
  )
}

export default Skills