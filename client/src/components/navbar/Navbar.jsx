import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="text">UWannaJob</div>
        </div>
        <div className="middle">
          <a href="/">
            <span>Home</span>
          </a>
          <a href="/">
            <span>About</span>
          </a>
          <a href="/">
            <span>Salary</span>
          </a>
        </div>
        <div className="right">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
