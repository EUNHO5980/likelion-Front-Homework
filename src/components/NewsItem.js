import React from 'react';
import './NewsItem.css';

const NewsItem = ({ title, content, source, imageUrl }) => {
  return (
    <div className="news-item">
      <div className="news-text">
        <span className="news-source">{source}</span>
        <h3 className="news-title">{title}</h3>
        <p className="news-content">{content}</p>
      </div>
      <img src={imageUrl} alt="news" className="news-image" />
    </div>
  );
};

export default NewsItem;
