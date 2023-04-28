import React from "react";
import "./modal.css";

import { useNavigate } from "react-router-dom";

function Modal() {
  const back = useNavigate();
  const companyName = "Morabaa Software";
  const requirements = [
    "Bachelor's degree in Computer Science or related field",
    "Minimum of 5 years experience in software engineering",
    "Proficiency in JavaScript and React",
    "Strong problem-solving skills",
    "Excellent written and verbal communication skills",
  ];

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button>X</button>
        </div>
        <div className="title">
          <h1>{companyName} - Software Engineering</h1>
        </div>
        <div className="body">
          <p></p>
          <ul>
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <div className="btns">
          <button onClick={() => back(-1)} id="cancelBtn">
            Cancel
          </button>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
