import React from "react";
import "./employerLogin.css";
import logimg from "./dream-job.jpg";
import { useNavigate } from "react-router-dom";

function EmployerLogin() {
  const navigate = useNavigate();
  return (
    <div className="employerLogin">
      <div>
        <div className="employer-login">
          <div className="col-1">
            <h2>Login</h2>
            <span>Login And Look for Employee</span>

            <form id="form" className="forms">
              <input type="email" placeholder="Mail Address" />

              <input type="password" placeholder="Password" />

              <button className="signbtn">Log In</button>
            </form>

            <div className="register-info">Don't you have an account?</div>
            <button
              className="regbtn"
              onClick={() => {
                navigate("/employerRegister");
              }}
            >
              Register
            </button>
          </div>

          <div className="col-2">
            <img className="signimg" src={logimg} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerLogin;
