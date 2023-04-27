import React from "react";
import "./aboutPage.css";
import { Link } from "react-router-dom";
import logo from "logo.png";



function aboutPage(){ 
    return(
<body>
    <div class="about">
        <div class="main">
            <img src="logo.png">
            <div class="about-text">
                <h1>Get to Know Us</h1>
                <h5>Employer <span>& Job seekers</span></h5>
                <p>As the UWannaJob team, we aim to unite job seekers and employers. We believe that by realizing this, we will find a solution to the unemployment problem of young people and all people who are looking for a job.</p>
                <button type="button">Get Contact Us</button>
            </div>
        </div>

    </div>
</body>

);
}

export default EmployeeRegister;

