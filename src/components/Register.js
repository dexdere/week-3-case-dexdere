import React, { useRef } from "react";
import "./Register.css";
import { postMockAPI } from "../api/RegisterApi";

const validEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
const checkEmpty = /[^\s]/g;

export default function Register() {
  let username = useRef(),
    email = useRef(),
    password = useRef();

  function deneme() {
    let value = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    let checkRegex =
      checkEmpty.test(value.username, value.email, value.password) &&
      validEmail.test(value.email);

    if (checkRegex) postMockAPI(value.username, value.email, value.password);

    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
  }

  return (
    <div className="register-body">
      <div className="register-main">
        <div className="register">
          <h1 className="register-title">Register</h1>

          <label htmlFor="username">Username</label>
          <input
            ref={username}
            type="username"
            placeholder="username"
            autoComplete="on"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            ref={email}
            type="email"
            placeholder="username@gmail.com"
            autoComplete="on"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            autoComplete="on"
            required
          />

          <button onClick={deneme} className="create-account">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
