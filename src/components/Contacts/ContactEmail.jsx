import React from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1i54s7s",
        "template_mxuoxtn",
        form.current,
        "0bxfrdbXfmW1bkKmw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  
  return (
    
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
    </form>
  );
};

export default ContactEmail;
