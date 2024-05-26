import React from 'react';
import './Article.css'; 

const Article = ({ title, subtitle }) => {
  return (
    <div className="article">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Article;
