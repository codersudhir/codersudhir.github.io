import { GridItem, Text, Grid, Center} from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

// Project Images
import milaap from "./Project_Images/milaap.png"
import skintore from "./Project_Images/skintore.png"
import mymart from "./Project_Images/mymart.png"
import orbitzs from "./Project_Images/orbitzs.png"
import meanbuy from "./Project_Images/meanbuy.png"
import ZARA from "./Project_Images/ZARA.png"


const Projects = () => {
  return (
    <>
      <div className="projects" id="projects" >
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          textAlign="center"
          color="white"
        >
           <p1 style={{fontSize:"36px",textAlign:"center"}}>Projects</p1>
        </Text>
       
        <Center w="100vw">
          <Grid className="projects_grid" m="10"  >


          <GridItem  >
                <ProjectCard stack={"React.js,Chakra UI,REST API,Redux,Thunks"}
                 discription={"ZARA.COM is replica if ecommerse website ZARA.COM in that User can Buy mens ,Womens ,Kids clothes "} 
                 deploy={"https://cerulean-blancmange-9d2121.netlify.app/"}
                  github={"https://github.com/rajkumarsahu89/lean-ticket-7646"}
                   imgSrc={ZARA} name="ZARA.COM" />
                   
              </GridItem>
         
              <GridItem >
                <ProjectCard stack={"React.js,Chakra UI , REST API"}
                 discription={"MYMART is replica if ecommerse website where user can buy daily needs , shoping, beauty products"} 
                 deploy={"https://chipper-khapse-233f71.netlify.app/"}
                  github={"https://github.com/codersudhir/steady-name-340"}
                   imgSrc={mymart} name="MYMART.COM" />
                   
              </GridItem>
        

          
              <GridItem>
                <ProjectCard stack={"React.js,Chakra UI , REST API"}
                 discription={"Skintore is beauty products website where all types of product avilable"}
                  deploy="https://soft-muffin-a0826a.netlify.app"
                   github={"https://github.com/codersudhir/supreme-honey-5251"}
                    imgSrc={skintore} name="Skintore.com" />
              </GridItem>
       

        
              <GridItem>
                <ProjectCard stack={"HTML, CSS, JAVSCRIPT"} 
                discription={"Milaap is fundRaising website iif there is needy people who need help he can raised fund"}
                 deploy="https://jocular-duckanoo-47e177.netlify.app" 
                 github={"https://github.com/Rajat-Yadav881/truculent-creature-9857"}
                  imgSrc={milaap} name="Millap.org" />
              </GridItem>
          
              <GridItem>
                <ProjectCard stack={"HTML ,CSS, JAVASCRIPT"} 
                discription={"Meanbuy is electronic ecommerse website where user can buy all types of electrinics gadgets"}
                 github={"https://github.com/dipeshsingh253/adamant-rings-9078"}
                  imgSrc={meanbuy} name="Meanbuy.com" />
              </GridItem>

              <GridItem>
                <ProjectCard stack={"HTML ,CSS , JAVASCRIPT"} 
                discription={"Orbits is Travelling website where user can travel all major functionalies "} 
                deploy="https://delicate-peony-2695b2.netlify.app" 
                github={"https://github.com/Bhairav001/Unit-2-ORBITZ.COM/tree/main"}
                 imgSrc={orbitzs} name="Orbitz.com" />
              </GridItem>
       
          </Grid>
        </Center>
      </div>
    </>
  );
};

export default Projects;
