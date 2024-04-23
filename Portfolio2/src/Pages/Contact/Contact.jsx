import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
export default function Contact()
{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n68gdh1', 'template_nmoauee', form.current, {
        publicKey: 'mv_x2SJU6JIANcUBu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          alert("Email Sent Successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact'>
      <h1 className='contactPageTitle'>CONTACT ME</h1>
      <span className="contactDesc">Please fill out this below form for any Query </span>
      <form  className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder='Your Name' name='from_name' />
        <input type="email" className="email" placeholder='Your Email' name='your_email' />
        <textarea name="message" id="" cols="30" rows="10" className="msg" placeholder='Your Message'></textarea>
        <button type='submit' value='Send' className="submitBtn">Submit</button>
      </form>
    </div>
  )
}
