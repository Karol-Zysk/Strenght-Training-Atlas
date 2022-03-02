import React from "react";
import style from "./Pages.module.css";
import logo from "../components/files/logo.PNG";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  let navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });
    const data = await response.json();

    if (data.status === "ok") {
      navigate("/login");
    }
  }

  return (
    <>
      <div className={style.fakeNav}></div>
      <div className={style.container}>
        <div className={style.pages_card}>
          <img src={logo} alt="img" className={style.pages_card_logo}></img>
          <h2 className={style.pages_h2}>Register</h2>
          <form onSubmit={registerUser}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
            <input type="submit" value="Register"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
