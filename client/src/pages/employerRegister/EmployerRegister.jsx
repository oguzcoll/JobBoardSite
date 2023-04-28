import React from "react";
import "./employerRegister.css";
import signimg from "./signimg.png";
import {useNavigate} from "react-router-dom";

function EmployerRegister() {
  const navigate = useNavigate();
  return (
    <div className="employerregister">
      <div className="main">
        <div className="register">
          <div className="col-1">
            <h2>Register</h2>
            <span>Register And Advertise </span>

            <form id="form" className="forms">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Surname" />
              <input type="email" placeholder="Mail" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Company" />
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Tax City" />
              <input type="text" placeholder="Tax Administration" />
              <input type="text" placeholder="Tax City" />
              <button className="signbtn">Sign In</button>
            </form>

            <div className="logininfo">Do you have an account?</div>
            <button className="logbtn" onClick={() => {navigate("/employerLogin")}}>Sign In</button>
          </div>

          <div className="col-2">
            <img className="signimg" src={signimg} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmployerRegister;
