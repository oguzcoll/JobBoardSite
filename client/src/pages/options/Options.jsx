import React from "react";
import "./options.css";
import { Link } from "react-router-dom";
import employer from "../../assets/employer.png";
import jobSeeker from "../../assets/job-seeker.png";

function Options() {
  return (
    <div id="container">
      <div class="box1">
        <Link to="/employerRegister">
          <img src={employer} alt="" />
        </Link>
      </div>
      <div class="box2">
        <Link to="/employeeRegister">
          <img src={jobSeeker} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Options;
