import React from "react";
import "./employeeRegister.css";
import signimg from "./signimg.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function EmployeeRegister() {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8800/api/auth/registerEmployee",
        inputs
      );
      navigate("/employeeLogin");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="employeeregister">
      <div className="main">
        <div className="register">
          <div className="col-1">
            <h2>Register</h2>
            <span>Register And Find The Job</span>

            <form id="form" className="forms">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Surname"
                name="surname"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {err && err}
              <button className="signbtn" onClick={handleClick}>
                Sign In
              </button>
            </form>

            <div className="logininfo">Do you have an account?</div>
            <button className="logbtn">Log In</button>
          </div>

          <div className="col-2">
            <img className="signimg" src={signimg} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmployeeRegister;
