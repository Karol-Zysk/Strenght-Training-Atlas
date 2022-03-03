import React from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import style from "./Pages.module.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let navigate = useNavigate();

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
      navigate("/articles");
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <MainContainer>
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
    </MainContainer>
  );
};

export default Login;
