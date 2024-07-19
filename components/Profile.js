import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    firstName: 'salha',
    lastName: 'masoud',
    email: 'salhaiddi@gmail.com',
    bio: 'Software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.'
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    // Add your save logic here (e.g., API call to save profile information)
    setIsEditing(false);
    console.log('Profile saved:', profileInfo);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h1>Profile</h1>
        {isEditing ? (
          <div className="profile-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={profileInfo.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={profileInfo.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={profileInfo.bio}
                onChange={handleChange}
              />
            </div>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <div className="profile-info">
            <div className="info-item">
              <strong>First Name:</strong> {profileInfo.firstName}
            </div>
            <div className="info-item">
              <strong>Last Name:</strong> {profileInfo.lastName}
            </div>
            <div className="info-item">
              <strong>Email:</strong> {profileInfo.email}
            </div>
            <div className="info-item">
              <strong>Bio:</strong> {profileInfo.bio}
            </div>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
