import React, { useState } from 'react'
import { Flex,Grid,GridItem,Center,Input ,Text, Spacer, Button} from '@chakra-ui/react'
import Socials from './socials/Socials'
import emailjs from "emailjs-com"
const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_8x362kb',
      'template_i9eeiy3',
      toSend,
      '3J4vCZ-g9GKE3tFLQ'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    console.log(toSend)
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div style={{color:"white"}} id="contact">
      <h1 style={{fontSize:"40px",textAlign:"center",marginTop:"15px"}}>Connect With Me</h1>
        <Center w="100vw">
          <Grid className="projects_grid" m="10">
              <GridItem  >
                <form onSubmit={onSubmit}>
              <p>If you want to know more about me or my work, or if you would just
                like to say hello, send me a message. I'd love to hear from you.</p>
              <label>Your Name
              <Input
              type='text'
               name='from_name'
               placeholder='Your Name'
              value={toSend.from_name}
               onChange={handleChange}
               />
               </label>
              {/* <label>to
              <Input
                type='text'
                name='to_name'
                placeholder='to name'
                value={toSend.to_name}
                onChange={handleChange}
               />
              </label> */}
              <label>Meassage
              <Input
                type='text'
                name='message'
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange}
               />
              </label>
              <label>Your E-mail
             
              </label>
              <Input
               type='text'
               name='reply_to'
                placeholder='Your email'
               value={toSend.reply_to}
                onChange={handleChange}
                />
              <Button type='submit' style={{backgroundColor:"#FF0072",width:"200px",borderRadius:"0%"}} marginTop={"20px"}>Submit</Button>
              </form>
              </GridItem>
               <GridItem style={{textAlign:"center",fontSize:"bold"}}>
                <p style={{fontSize:"20px"}}>EMAIL :</p>
               <Text><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJpFFRHWXkXsCRVKgQGWHxnqFwTZTrrVFkQZDVlwGlKDlnXrjrhDJngTGtmpmBFwClMZg" id="contact-email">nandanesudhir1@gmail.com</a></Text>

               <h1 style={{fontSize:"20px"}}>ADDRESS :</h1>
               <Text>Ashti,Maharashtra,India</Text>

               <h1 style={{fontSize:"20px"}}>CONTACT :</h1>
              <a href="google dialer" id="contact-phone">9657267157</a>
               
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