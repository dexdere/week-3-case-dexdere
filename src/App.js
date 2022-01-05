import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import HelloPage from "./components/HelloPage";
import Register from "./components/Register";
import MainPage from "./components/MainPage";

function PrivateRoute({ children }) {
  return localStorage.getItem("auth") ? <Navigate to="/main-page" /> : children;
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/" element={<HelloPage />} />
        </Routes>
      </div>
    </Router>
  );
}
