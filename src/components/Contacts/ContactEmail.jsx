import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./contacts.module.css";

const ContactEmail = ({ loginName }) => {
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
          localStorage.setItem("name", loginName);
          e.target.children[1].disabled = "true";
          e.target.children[1].placeholder =
            "You can write next message in one hour";
          e.target.children[1].style.color = "black";
          e.target.children[3].disabled = "true";
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className={style.contacts_label}>Message</label>
      <textarea
        className={style.contacts_textarea}
        placeholder={`sending message as ${loginName}`}
        name="message"
        disabled={loginName === localStorage.getItem("name") ? true : false}
      />
      <input
        style={{ display: "none" }}
        value={loginName}
        type="text"
        name="user_name"
      />

      <input
        style={{ width: "30%", marginTop: "0.5rem" }}
        className={style.btn}
        type="submit"
        value="Send"
        disabled={localStorage.getItem("name") === loginName ? true : false}
      />
    </form>
  );
};

export default ContactEmail;
