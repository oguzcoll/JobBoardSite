import React from "react";
import "./aboutPage.css";
import logo from "../../assets/logo.png";

function AboutPage() {
  return (
    <body className="">
      <div className="about">
        <div className="main">
          <img src={logo} alt="UWannaJob Logo" />
          <div className="about-text">
            <h1>Get to Know Us</h1>
            <h5>
              Employer <span>& Job seekers</span>
            </h5>
            <p>
              As the UWannaJob team, we aim to unite job seekers and employers.
              We believe that by realizing this, we will find a solution to the
              unemployment problem of young people and all people who are
              looking for a job.
            </p>
            <button type="buttonn">Get Contact Us</button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default AboutPage;
