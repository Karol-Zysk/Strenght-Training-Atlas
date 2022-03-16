import style from "./Pages.module.css";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../axios";
import MainContainer from "./MainContainer";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,12}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "http://localhost:3001/api/register";

const Register = () => {
  let navigate = useNavigate();
  const nameRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setUserFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setValidName(USER_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password, name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(name);
    const v2 = PWD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ email, password, name }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      navigate("/login");
      setSuccess(true);
      setEmail("");
      setName("");
      setPassword("");
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken or email already exist");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <MainContainer>
        {success ? (
          <section>
            <h1>Success!</h1>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errMsg ? style.errmsg : style.offscreen}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1 className={style.pages_h2}>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className={style.divRegister} htmlFor="Name">
                <div className={style.flexDiv}></div>
                <p>Name</p>{" "}
                <input
                  className={style.inputRegister}
                  type="text"
                  id="Name"
                  ref={nameRef}
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name"
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validName ? style.valid : style.hide}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validName || !name ? style.hide : style.invalid}
                />
                <div></div>
              </div>{" "}
              <p
                id="uidnote"
                className={
                  nameFocus && name && !validName
                    ? style.instructions
                    : style.offscreen
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 12 characters. Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              <div className={style.divRegister} htmlFor="email">
                <p>Email</p>{" "}
                <input
                  className={style.inputRegister}
                  type="text"
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validEmail ? style.valid : style.hide}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validEmail || !email ? style.hide : style.invalid}
                />
              </div>
              <p
                id="uidnote"
                className={
                  emailFocus && email && !validEmail
                    ? style.instructions
                    : style.offscreen
                }
              ></p>
              <div className={style.divRegister} htmlFor="password">
                <p>Password</p>{" "}
                <input
                  className={style.inputRegister}
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPassword ? style.valid : style.hide}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={
                    validPassword || !password ? style.hide : style.invalid
                  }
                />
              </div>
              <p
                id="pwdnote"
                className={
                  pwdFocus && !validPassword
                    ? style.instructions
                    : style.offscreen
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
              <button
                className={style.btn}
                disabled={
                  !validName || !validPassword || !validEmail ? true : false
                }
              >
                Sign Up
              </button>
            </form>
          </section>
        )}
      </MainContainer>
    </>
  );
};

export default Register;
