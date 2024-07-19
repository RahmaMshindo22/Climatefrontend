import React, { useState } from 'react';
import './Registration.css'; 

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        companyName: formData.companyName,
        password: formData.password,
      }),
    });

    if (response.ok) {
      alert("User registered successfully");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="registration-container">
      <div className="wrapper">
        <span className="icon-close">
          <ion-icon name="mail"></ion-icon>
        </span>
      </div>
      <div className="wrapper-register">
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
          <div className="form">
            <div className="input-box">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form">
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form">
            <div className="input-box">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form">
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form">
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form">
            <div className="remember-forget">
              <label>
                <input type="checkbox" required />I agree to the terms & conditions
              </label>
            </div>
          </div>
          <button type="submit" className="btn">Register</button>
          <p>Already have an account? <a href="Login">Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
