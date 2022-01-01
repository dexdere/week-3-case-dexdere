import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-body">
      <div className="register-main">
        <div className="register">
          <h1 className="register-title">Register</h1>

          <label htmlFor="username">Username</label>
          <input type="username" placeholder="username" autocomplete="on" required />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="username@gmail.com" autocomplete="on" required />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" autocomplete="on" required/>

          <button className="create-account">Create Account</button>
        </div>
      </div>
    </div>
  );
}
