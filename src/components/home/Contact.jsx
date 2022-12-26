import React from 'react'
import { Flex,Grid,GridItem,Center,Input ,Text, Spacer, Button} from '@chakra-ui/react'
import Socials from './socials/Socials'
const Contact = () => {
  return (
    <div style={{color:"white"}}>
      <h1 style={{fontSize:"40px",textAlign:"center"}}>Connect With Me</h1>
        <Center w="100vw">
          <Grid className="projects_grid" m="10">
              <GridItem  >
              <p>If you want to know more about me or my work, or if you would just
                like to say hello, send me a message. I'd love to hear from you.</p>
              <label>Name
              <Input type={"text"} placeholder="Enter Your Name" />
              </label>
              <label>Email
              <Input type={"email"} placeholder="Type E-mail"/>
              </label>
              <label>Meassage
              <Input type="text" placeholder='Enter A message For Me'/>
              </label>
              <Button style={{backgroundColor:"#FF0072",width:"200px",borderRadius:"0%"}} marginTop={"20px"}>Submit</Button>
              </GridItem>
               <GridItem style={{textAlign:"center",fontSize:"bold"}}>
                <p style={{fontSize:"20px"}}>EMAIL :</p>
               <Text><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJpFFRHWXkXsCRVKgQGWHxnqFwTZTrrVFkQZDVlwGlKDlnXrjrhDJngTGtmpmBFwClMZg">nandanesudhir1@gmail.com</a></Text>

               <h1 style={{fontSize:"20px"}}>ADDRESS :</h1>
               <Text>Ashti,Maharashtra,India</Text>

               <h1 style={{fontSize:"20px"}}>CONTACT :</h1>
              <a href="google dialer">9657267157</a>
               
              </GridItem>
              <GridItem >
              <h1 style={{fontSize:"20px",marginBottom:"30px"}}> Connect with on  social links.</h1>
               <Socials/>
              </GridItem>
        
          </Grid>
        </Center>
    </div>
  )
}

export default Contact