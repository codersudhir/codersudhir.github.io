import { VStack,Flex,Link,Box, Button ,Grid,GridItem, Center} from '@chakra-ui/react';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <>
      <VStack className="project_card" border={"1px solid white"} gap="1" color="white" width={"100%"}>
      <LazyLoadImage src={props.imgSrc} id="image" />
        <Flex justifyContent={"space-between"}>  
        <Box
          className="description"
          width="100%"
        >  <p style={{fontSize:"15px",padding:"10px"}}>{props.discription}</p>

         <p style={{display:"flex",marginLeft:"10px",fontSize:"15px"}}> <h1>Tech Stack :</h1> {props.stack}</p>
         
          <Grid style={{display:"flex",justifyContent:"space-evenly",marginTop:"10px"}}>
            <GridItem>
          <Link marginLeft={"10%"}  href={props.github} isExternal > 
          <Button style={{backgroundColor:"#FF0072",borderRadius:"0%"}} > github</Button>
          </Link>
          </GridItem>
          <GridItem>
           <Link marginLeft={"10%"}  href={props.deploy} isExternal > 
           <Button style={{backgroundColor:"#FF0072",borderRadius:"0%"}} >deploy</Button>
           </Link> 
           </GridItem>
          </Grid>
         
          
        </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default ProjectCard;
