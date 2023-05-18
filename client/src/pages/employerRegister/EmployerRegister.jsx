import React from "react";
import "./employerRegister.css";
import signimg from "./signimg.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function EmployerRegister() {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    companyName: "",
    country: "",
    city: "",
    taxCity: "",
    taxAdministration: "",
  });
  const[err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  }

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8800/api/auth/registerEmployer",
        inputs
      );
      navigate("/employerLogin");

    }
    catch(error){
      setErr(error.response.data);
    }
  };

  return (
    <div className="employerregister">
      <div className="main">
        <div className="register">
          <div className="col-1">
            <h2>Register</h2>
            <span>Register And Advertise </span>

            <form id="form" className="forms">
              <input type="text" placeholder="Name" name="name" onChange={handleChange} />
              <input type="text" placeholder="Surname" name="surname" onChange={handleChange}/>
              <input type="email" placeholder="Mail" name="email" onChange={handleChange}/>
              <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
              <input type="text" placeholder="Company" name="companyName" onChange={handleChange}/>
              <input type="text" placeholder="Country" name="country" onChange={handleChange}/>
              <input type="text" placeholder="City" name="city" onChange={handleChange}/>
              <input type="text" placeholder="Tax City" name="taxCity" onChange={handleChange}/>
              <input type="text" placeholder="Tax Administration" name="taxAdministration" onChange={handleChange}/>

              {err && err}
              <button className="signbtn" onClick={handleClick}>Sign In</button>
            </form>

            <div className="logininfo">Do you have an account?</div>
            <button
              className="logbtn"
              onClick={() => {
                navigate("/employerLogin");
              }}
            >
              Sign In
            </button>
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
