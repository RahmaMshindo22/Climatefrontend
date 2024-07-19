import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


import { FaHome, FaUser, FaChartLine, FaCogs, FaSignOutAlt, FaTachometerAlt,faCalendarPlus } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <h1>Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/home"><FaHome /> Home</Link></li>
            <li><Link to="/Profile"><FaUser /> Profile</Link></li>
            <li><Link to="/Setting"><FaCogs /> Settings</Link></li>
            <li><Link to="/Logout"><FaSignOutAlt /> Logout</Link></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <aside className="sidebar">
          <ul>
          <li><Link to="/Event"><faCalendarPlus /> create Events</Link></li>
            <li><Link to="/CalendarView"><FaTachometerAlt /> Calendar View</Link></li>
            <li><Link to="/analytics"><FaChartLine /> Analytics</Link></li>

            
          </ul>
        </aside>
        <main className="main-content">
          <h2>Welcome to the Event Manangement System</h2>
          <p>We provide exllent services for event Manangement .</p>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
