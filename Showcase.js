// Showcase.js
import React from 'react';
import './Showcase.css'; // Assuming you have a CSS file for styling

const Showcase = () => {
  return (
    <section id="showcase" className="gn-container gn-container-home">
      <div className="gn-content">
        <div className="gn-home-cards">
          <div className="gn-home-card">
            <a href="catalogue/index.html#/search/filter/?f=dataset">
              <i className="fa fa-database fa-2x"></i>168 Datasets
            </a>
          </div>
          <div className="gn-home-card">
            <a href="catalogue/index.html#/search/filter/?f=map">
              <i className="fa fa-map fa-2x"></i>7 Maps
            </a>
          </div>
          <div className="gn-home-card">
            <a href="people/index.html">
              <i className="fa fa-user fa-2x"></i>524 Community members
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
