import React from "react";
import {  useField } from "formik";
import style from "./Pages.module.css";

const Fields = (...props) => {
  const [field, meta] = useField(name, email, password);
  return (
    <>
      <h2 className={style.pages_h2}>Register</h2>
      <label htmlFor={field.name}>
        <input value={props.name} type="text" placeholder="Name" />
      </label>
      <label htmlFor={field.password}>
        <input value={props.password} type={props.type} placeholder="Password" />
      </label>
      <label htmlFor={field.email}>
        <input value={email} type="email" placeholder="Email" />
      </label>
    </>
  );
};

export default Fields;
