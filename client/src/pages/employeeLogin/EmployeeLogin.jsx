import React from "react";
import "./employeeLogin.css";
import logimg from "./dream-job.jpg";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

function EmployeeLogin() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { loginEmployee } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginEmployee(inputs);
      navigate("/home");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="employeeLogin">
      <div>
        <div className="employee-login">
          <div className="col-1">
            <h2>Login</h2>
            <span>Login And Find Your Dream Job</span>
            <form id="form" className="forms">
              <input
                type="email"
                placeholder="Mail Address"
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
              <button className="signbtn" onClick={handleLogin}>
                Sign In
              </button>
            </form>

            <div className="register-info">Don't you have an account?</div>
            <button
              className="regbtn"
              onClick={() => {
                navigate("/employeeRegister");
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

export default EmployeeLogin;
