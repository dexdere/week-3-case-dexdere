import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-body">
      <div className="login-main">
        <div className="login">
          <h1 className="login-title">Login</h1>

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="username@gmail.com" autocomplete="on" required />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" autocomplete="on" required/>

          <span><a className="forgot-password" href="./">Forgot Password?</a></span>
          <button className="sign-in">Sign in</button>
          <p className="other-sign">or continue with</p>
          
          <span className="oauth">
            <button><img src="https://img.icons8.com/color/30/000000/google-logo.png" alt="google-auth"/></button>
            <button><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="github-auth"/></button>
            <button><img src="https://img.icons8.com/color/30/000000/facebook-new.png" alt="facebook-auth"/></button>
          </span>

          <p className="other-sign">Don’t have an account yet? 
              <span><a className="register-link" href="./"> Register for free</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}
