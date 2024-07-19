import React, { useState } from 'react';
import './Setting.css';

const Setting = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [accountSettings, setAccountSettings] = useState({
    username: '',
    password: '',
  });
  const [preferences, setPreferences] = useState({
    theme: 'light',
    notifications: true,
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAccountSettingsChange = (e) => {
    const { name, value } = e.target;
    setAccountSettings((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePreferencesChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setPreferences((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Add your save logic here (e.g., API call to save settings)
    console.log('Settings saved:', { personalInfo, accountSettings, preferences });
  };

  return (
    <div className="setting-page">
      <div className="setting-card">
        <h1>Settings</h1>
        <form onSubmit={handleSave}>
          <div className="section">
            <h2>Personal Information</h2>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={personalInfo.firstName}
                onChange={handlePersonalInfoChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={personalInfo.lastName}
                onChange={handlePersonalInfoChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
              />
            </div>
          </div>

          <div className="section">
            <h2>Account Settings</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={accountSettings.username}
                onChange={handleAccountSettingsChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={accountSettings.password}
                onChange={handleAccountSettingsChange}
              />
            </div>
          </div>

          <div className="section">
            <h2>Preferences</h2>
            <div className="form-group">
              <label htmlFor="theme">Theme</label>
              <select
                id="theme"
                name="theme"
                value={preferences.theme}
                onChange={handlePreferencesChange}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="notifications">Notifications</label>
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={preferences.notifications}
                onChange={handlePreferencesChange}
              />
            </div>
          </div>

          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
