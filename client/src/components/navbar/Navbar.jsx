import React from "react";
import "./navbar.css";
import {useNavigate} from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="text">UWannaJob</div>
        </div>
        <div className="middle">
          <a href="/home">
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
          <button className="login" onClick={() =>{navigate("/employeeLogin")}}>Login</button>
          <button className="register" onClick={() => {navigate("/employeeRegister")}}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
