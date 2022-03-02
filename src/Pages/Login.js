import React from "react";
import style from "./Pages.module.css";
import logo from "../components/files/logo.PNG";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("login sucsesfull");
      window.location.href = "/articles";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <>
      <div className={style.fakeNav}></div>
      <div className={style.container}>
        <div className={style.pages_card}>
          <img src={logo} alt="img" className={style.pages_card_logo}></img>
          <h2 className={style.pages_h2}>Login</h2>
          <form onSubmit={loginUser}>
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
            <input type="submit" value="Login"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
