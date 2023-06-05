import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="text">UWannaJob</div>
        </div>
        <div className="middle">
          <Link to="/home">
            <span>Home</span>
          </Link>

          <Link to="/about">
            <span>About</span>
          </Link>

          <Link to="/salary">
            <span>Salary</span>
          </Link>
        </div>
        <div className="right">
          <button
            className="login"
            onClick={() => {
              navigate("/employeeLogin");
            }}
          >
            Login
          </button>
          <button
            className="register"
            onClick={() => {
              navigate("/employeeRegister");
            }}
          >
            Register
          </button>
          <button
            className="profile"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
            </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
