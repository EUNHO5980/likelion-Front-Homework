import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default SearchBar;
