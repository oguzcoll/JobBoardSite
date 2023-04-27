import React from "react";
import "./modal.css";
import {useNavigate} from "react-router-dom";

function Modal({ setOpenModal }) {
    const back = useNavigate();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Software Engineering</h1>
        </div>
        <div className="body">
          <p>Information about the job</p>
        </div>
        <div className="btns">
          <button
            onClick={() => back(-1)}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;