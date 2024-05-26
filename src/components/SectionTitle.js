import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, icon }) => {
  return (
    <div className="section-title">
      <div className="title-text">
        <h1>{title}</h1>
      </div>
      {icon && <img src={icon} alt="icon" className="title-icon" />}
    </div>
  );
};

export default SectionTitle;
