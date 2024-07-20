// Navigation.js
import React from 'react';
import './Navigation.css'; // Assuming you have a CSS file for styling

const Navigation = () => {
  return (
    <nav className="gn-menu">
      <div className="gn-menu-content">
        <div className="gn-menu-content-left">
          {/* Left-side menu items */}
        </div>
        <div className="gn-menu-content-center">
          {/* Center content if needed */}
        </div>
        <div className="gn-menu-content-right">
          <ul className="gn-menu-list">
            <li>
              <a id="home" href="index.html" className="nav-link btn btn-primary">Home</a>
            </li>
            <li>
              <div className="dropdown">
                <button
                  type="button"
                  className="dropdown-toggle btn btn-primary"
                  data-toggle="dropdown"
                >
                  Resources
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="https://crd-userguide.readthedocs.io/en/latest/" target="blank">Training</a></li>
                  <li><a href="tools-page/index.html">Tools</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button
                  type="button"
                  className="dropdown-toggle btn btn-primary"
                  data-toggle="dropdown"
                >
                  Community
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="people/index.html">Registered Members</a></li>
                  <li><a href="groups/categories/index.html">Community Groups</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
