import React, { useRef, useState, useEffect } from "react";
import { getMockAPI, apiData } from "../api/RegisterApi";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  let email = useRef();

  const [password, setPassword] = useState("");

  useEffect(() => {
    getMockAPI();
  }, []);

  function forgotPassword() {
    // eslint-disable-next-line array-callback-return
    apiData.map((data) => {
      if (email.current.value === data.email)
        setPassword(`Your password: "${data.password}"`);
    });


    
  }

  return (
    <div className="forgot-body">
      <div className="forgot-main">
        <div className="forgot">
          <h1 className="forgot-title">Forgot Password</h1>

          <label htmlFor="email">Email</label>
          <input
            ref={email}
            type="email"
            placeholder="username@gmail.com"
            autoComplete="on"
            required
          />

          <h4 style={{ margin: 0, textAlign: "center", color: "green" }}>
            {password}
          </h4>

          <button onClick={forgotPassword} className="forgot-button">
            Show Password
          </button>
        </div>
      </div>
    </div>
  );
}
