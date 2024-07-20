// Footer.js
import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="gn-footer">
      <div className="ra-footer-wrapper">
        <ul>
          <li><a href="https://resilienceacademy.ac.tz/about-us/" target="_blank" rel="noopener noreferrer">About Us</a></li>
          <li><a href="term-of-use/index.html">Terms of use</a></li>
          <li><a href="https://resilienceacademy.ac.tz/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
          <li><a href="https://resilienceacademy.ac.tz/" target="_blank" rel="noopener noreferrer">Resilience Academy Website</a></li>
          <li><a href="https://www.geoict.org/" target="_blank" rel="noopener noreferrer">GeoICT4e</a></li>
        </ul>
        <div><small>Managed and Designed by CRD Team</small></div>
      </div>
    </footer>
  );
};

export default Footer;
