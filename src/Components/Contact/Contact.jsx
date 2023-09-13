import React, { useState } from 'react';
import "./contact.css";
import {MdOutlineMail} from "react-icons/md"
import {BsLinkedin} from "react-icons/bs";
import {BsMessenger} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

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
        Swal.fire('Your Message Succefully  Send')
      })
      .catch((err) => {
        console.log('FAILED...', err);
        Swal.fire('Please fill proper details')
      });
    console.log(toSend)
    
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Nandanesudhir@gmail.com</h5>
            <a href="mailto:nandanesudhir1@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/sudhir-nandane-38843212a/" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <a href="https://m.me/sudhirnandane" target="_blank">Send a message</a>
          </article>
        </div>


        <form onSubmit={onSubmit}  >

          <input type='text'
               name='from_name'
               placeholder='Your Name'
              value={toSend.from_name}
              required
               onChange={handleChange}/>

          <input type='text'
               name='reply_to'
                placeholder='Your email'
               value={toSend.reply_to}
                onChange={handleChange}/>
          <textarea type='text'
                name='message'
                placeholder='Your message'
                value={toSend.message}
                required
                onChange={handleChange}></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
