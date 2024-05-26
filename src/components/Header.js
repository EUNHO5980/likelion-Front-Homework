import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; 

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="투자가 머니 로고" />
      </div>
      <nav className="nav">
        <a href="/news">뉴스</a>
        <a href="/courses">교과서</a>
      </nav>
      <div className="login-section">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        {isLoggedIn ? (
          <div className="user-info">
            <span className="user-name">내이름</span>
            <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
          </div>
        ) : (
          <div className="login">
            <a href="/login">로그인</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
