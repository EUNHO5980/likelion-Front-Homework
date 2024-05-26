import React from 'react';
import './SectionTitle.css';
import icon from '../assets/icon.png'; 

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <div className="title-text">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
      <img src={icon} alt="icon" className="title-icon" />
    </div>
  );
};

export default SectionTitle;
