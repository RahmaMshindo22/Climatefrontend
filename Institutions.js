// Institutions.js
import React from 'react';
import './Institutions.css'; // Assuming you have a CSS file for styling

const Institutions = () => {
  return (
    <section id="institutions" className="gn-container gn-container-home">
      <div className="gn-content">
        <div>
          <h4>Initiative by</h4>
          <div className="gn-home-cards">
            <div className="gn-home-card">
              <a href="https://www.tanzania.go.tz/" target="_blank">
                <img src="https://geonode.resilienceacademy.ac.tz/static/img/logo/Government-of-Tanzania-Logo.png" alt="Government of Tanzania" />
              </a>
            </div>
            <div className="gn-home-card">
              <a href="https://www.ukaiddirect.org/" target="_blank">
                <img src="https://geonode.resilienceacademy.ac.tz/static/img/logo/UKaid-Logo.png" alt="UKaid" />
              </a>
            </div>
            <div className="gn-home-card">
              <a href="http://www.worldbank.org/en/programs/tanzania-urban-resilience-program" target="_blank">
                <img src="https://geonode.resilienceacademy.ac.tz/static/img/logo/TURP-Logo.png" alt="TURP" />
              </a>
            </div>
            <div className="gn-home-card">
              <a href="http://www.worldbank.org/" target="_blank">
                <img src="https://geonode.resilienceacademy.ac.tz/static/img/logo/The-World-Bank-logo.png" alt="World Bank" />
              </a>
            </div>
          </div>
        </div>
        <div className="gn-divider"></div>
        <div>
          <h4>Supported by</h4>
          <div className="gn-home-cards">
            <div className="gn-home-card">
              <a href="http://www.aru.ac.tz/" target="_blank">
                <img src="https://geonode.resilienceacademy.ac.tz/static/img/logo/ARU-logo.jpg" alt="ARU" />
              </a>
            </div>
            <div className="gn-home-card">
              <a href="https://www.sua.ac.tz/" target="_blank">
                <img src="https://geonode.resilienceacademy.ac.tz/static/img/logo/SUA_logo.png" alt="SUA" />
              </a>
            </div>
            <div className="gn-home-card">
              <a href="https://www.suza.ac.tz/" target="_blank">
                <img src="https://geonode.resilienceacademy.ac.tz/static/img/logo/logo_suza_suza.png" alt="SUZA" />
              </a>
            </div>
            <div className="gn-home-card">
              <a href="https://www.udsm.ac.tz/" target="_blank">
                <img src="https://geonode.resilienceacademy.ac.tz/static/img/logo/UDSM_logo.png" alt="UDSM" />
              </a>
            </div>
            <div className="gn-home-card">
              <a href="https://www.utu.fi/en" target="_blank">
                <img src="https://geonode.resilienceacademy.ac.tz/static/img/logo/UTU.png" alt="UTU" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutions;
