import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_sb4ia1s', 'template_8higfss', form.current, 'SUvFajLV8BFTM2MPu')

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <acticle className="contact__option">
            <MdOutlineEmail className="contact__options-icon" />
            <h4>Email</h4>
            <h5>badamin771@gmail.com</h5>
            <a href="mailto:badamin771@gmail.com.my" target="_blank">Send a Message</a>
          </acticle>

          <acticle className="contact__option">
            <RiMessengerLine className="contact__options-icon" />
            <h4>Messenger</h4>
            <h5>Badrul Amin</h5>
            <a href="https://m.me/badrula3" target="_blank">Send a Message</a>
          </acticle>

          <acticle className="contact__option">
            <BsWhatsapp className="contact__options-icon" />
            <h4>WhatsApp</h4>
            <h5>+6 018 - 9139569</h5>
            <a href="https://api.whatsapp.com/send?phone=+60189139569" target="_blank">Send a Message</a>
          </acticle>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='text' placeholder="Your Full Name" required />
          <input type="text" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact