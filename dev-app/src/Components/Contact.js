import React from 'react';
import './Nav.css'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_H5n7QYzllmHeh7qKD4UgT");

function Contact() {

  return <div className='contact'>
    <h4>Contacts</h4>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </div>
  
}

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_uultwjo', 'template_thgku77', e.target)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}

export default Contact;