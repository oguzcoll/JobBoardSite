import React, { useState } from "react";
import "./profile.css";
import ben from "./ben.jpg";
import Job from "../../components/Job/Job";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [setPhoto] = useState(null);
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [school, setSchool] = useState("");
  const [experience, setExperience] = useState("");
  const [profession, setProfession] = useState("");
  const [department, setDepartment] = useState("");

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <div className="fulprofile">
      <div className="profile">
        <div className="profile-header">
          <h1>Profile</h1>
        </div>
        <div className="profile-content">
          <div className="profile-photo">
            <img src={ben} alt="Profile" />
            {isEditing && (
              <div className="upload-photo">
                <input type="file" onChange={handlePhotoChange} />
              </div>
            )}
          </div>
          <div className="profile-details">
            <div className="profile-detail">
              <label>Name:</label>
              {isEditing ? (
                <input type="text" value={name} onChange={handleNameChange} />
              ) : (
                <span>{name}</span>
              )}
            </div>
            <div className="profile-detail">
              <label>Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              ) : (
                <span>{email}</span>
              )}
            </div>
            <div className="profile-detail">
              <label>Birthday:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={birthday}
                  onChange={handleBirthdayChange}
                />
              ) : (
                <span>{birthday}</span>
              )}
            </div>
            <div className="profile-detail">
              <label>Gender:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={gender}
                  onChange={handleGenderChange}
                />
              ) : (
                <span>{gender}</span>
              )}
            </div>
            <div className="profile-detail">
              <label>Phone:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              ) : (
                <span>{phone}</span>
              )}
            </div>
            <div className="profile-detail">
              <label>Address:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                />
              ) : (
                <span>{address}</span>
              )}
            </div>
            <div className="profile-detail">
              <label>School:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={school}
                  onChange={handleSchoolChange}
                />
              ) : (
                <span>{school}</span>
              )}
            </div>
            <div className="profile-detail">
              <label>Experience:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={experience}
                  onChange={handleExperienceChange}
                />
              ) : (
                <span>{experience}</span>
              )}
            </div>
            <div className="profile-detail">
              <label>Profession:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profession}
                  onChange={handleProfessionChange}
                />
              ) : (
                <span>{profession}</span>
              )}
            </div>
            <div className="profile-detail">
              <label>Department:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={department}
                  onChange={handleDepartmentChange}
                />
              ) : (
                <span>{department}</span>
              )}
            </div>
          </div>
        </div>
        <div className="profilebutton">
          <button onClick={handleEditProfile}>
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>
      <div className="applications"> 
      <h2>Applications</h2>
      <div className="jobList">
      <Job />
      <Job />
      <Job />
      <Job />
      
    
    </div>
       
        
      </div>
    </div>
  );
}

export default Profile;
