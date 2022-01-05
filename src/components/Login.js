import React, {useRef} from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  let eye = useRef()

  const togglePassword = () => eye.current.type = eye.current.type === "password" ? "text" : "password";

  return (
    <div className="login-body">
      <div className="login-main">
        <form className="login">
          <h1 className="login-title">Login</h1>

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="username@gmail.com" autoComplete="on" required />

          <label htmlFor="password">Password</label>
          <div>
            <input ref={eye} type="password" placeholder="Password" autoComplete="on" required/>
            <img className="eye" src="https://img.icons8.com/ios/25/000000/visible--v1.png" onClick={togglePassword} alt=""/>
          </div>

          <span><a className="forgot-password" href="./">Forgot Password?</a></span>
          <button className="sign-in">Sign in</button>
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
