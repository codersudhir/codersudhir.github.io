import React, { useState } from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa'; // Corrected import
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        'service_8x362kb',
        'template_i9eeiy3',
        toSend,
        '3J4vCZ-g9GKE3tFLQ'
      );
      console.log('SUCCESS!', response.status, response.text);
      Swal.fire('Your message was sent successfully.');
      setToSend({from_name:"",reply_to:"",message:""})
    } catch (error) {
      console.error('FAILED...', error);
      Swal.fire('Failed to send message. Please try again later.');
    }
    console.log(toSend);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Nandanesudhir@gmail.com</h5>
            <a href="mailto:nandanesudhir1@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/sudhir-nandane-38843212a/" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" /> {/* Updated icon import */}
            <h4>Messenger</h4>
            <a href="https://m.me/sudhirnandane" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={toSend.from_name}
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            value={toSend.reply_to}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={toSend.message}
            required
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
