import React, { useState } from "react";
import "./employeeRegister.css";

function EmployeeRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [graduatedDepartment, setGraduatedDepartment] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGraduatedDepartmentChange = (event) => {
    setGraduatedDepartment(event.target.value);
  };

  const handleCurrentJobChange = (event) => {
    setCurrentJob(event.target.value);
  };

  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Graduated Department: ${graduatedDepartment}`);
    console.log(`Current Job: ${currentJob}`);
    console.log(`Birth Date: ${birthDate}`);
  };

  return (
    <div className="employee-register-container">
      <h1>Employee Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label>
          Graduated Department:
          <input
            type="text"
            value={graduatedDepartment}
            onChange={handleGraduatedDepartmentChange}
          />
        </label>
        <label>
          Current Job:
          <input
            type="text"
            value={currentJob}
            onChange={handleCurrentJobChange}
          />
        </label>
        <label>
          Birth Date:
          <input
            type="date"
            value={birthDate}
            onChange={handleBirthDateChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default EmployeeRegister;
