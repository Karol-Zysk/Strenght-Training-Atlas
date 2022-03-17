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
    const response = await fetch("https://stbible.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      navigate("/articles");
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <MainContainer>
      <section>
        <h2 className={style.pages_h2}>Login</h2>
        <form onSubmit={loginUser}>
          <div className={style.divRegister}>
            <p>Email</p>{" "}
            <input
              className={style.inputRegister}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className={style.divRegister}>
            <p>Password</p>{" "}
            <input
              className={style.inputRegister}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <button className={style.btn} type="submit" value="Login">
            Login
          </button>
        </form>
      </section>
    </MainContainer>
  );
};

export default Login;
