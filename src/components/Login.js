import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { getMockAPI, apiData } from "../api/RegisterApi";

export default function Login() {
  let email = useRef(),
    password = useRef();

  const [info, setInfo] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    getMockAPI();
  }, [])

  function checkLogin(e) {
    e.preventDefault();
    
    apiData.map((data) => {
      if (data.email === email.current.value && data.password === password.current.value) {
        email.current.value = "";
        password.current.value = "";
        setInfo("Registration successful.");
        setColor("green");
      } else {
        setInfo("Incomplete or incorrect information.");
        setColor("red");
      }
    });
  }

  const togglePassword = () =>
    (password.current.type =
      password.current.type === "password" ? "text" : "password");

  return (
    <div className="login-body">
      <div className="login-main">
        <form className="login">
          <h1 className="login-title">Login</h1>

          <label htmlFor="email">Email</label>
          <input ref={email} type="email" placeholder="username@gmail.com" autoComplete="on" required />

          <label htmlFor="password">Password</label>
          <div>
            <input ref={password} type="password" placeholder="Password" autoComplete="on" required/>
            <img className="eye" src="https://img.icons8.com/ios/25/000000/visible--v1.png" onClick={togglePassword} alt=""/>
          </div>

          <span><a className="forgot-password" href="./">Forgot Password?</a></span>
          <button className="sign-in" onClick={(e) => checkLogin(e)}>Sign in</button>
          <h5 style={{ color: color, margin: 0, textAlign: "center" }}>{info}</h5>
          <p className="other-sign">or continue with</p>

          <span className="oauth">
            <button><img src="https://img.icons8.com/color/30/000000/google-logo.png" alt="google-auth"/></button>
            <button><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="github-auth"/></button>
            <button><img src="https://img.icons8.com/color/30/000000/facebook-new.png" alt="facebook-auth"/></button>
          </span>

          <p className="other-sign">
            Don’t have an account yet?
            <Link className="register-link" to="/register"> Register for free</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
