import React from "react";
import { Link } from "react-router-dom";
import "./HelloPage.css";

export default function HelloPage() {
  return (
    <div className="hello-body">
      <div className="article">
        <h1>Hello {localStorage.getItem("username")}👋</h1>
        <p>
          I hope everyone is safe and sound. I designed different type of
          lending pages,application. it can help others to develop more ideas
          from this. I keep it simple and minimal. It can also help you find
          different options in exploring and improving your skills.
        </p>
        <p>
          I am available for new projects. I hope you show me your support 😄
        </p>
        <p>
          {" "}
          I wish you luck,
          <br />
          <span> Batuhan Münger</span>
        </p>
        <img
          src="https://img.icons8.com/windows/40/000000/long-arrow-down.png"
          alt=""
        />
        <Link
          to={localStorage.getItem("auth") === null ? "/login" : "/main-page"}
        >
          <button>Buy me a Coffee</button>
        </Link>{" "}
      </div>
      <img className="hello-page-png" src="/hello_page.svg" alt="" />
    </div>
  );
}
