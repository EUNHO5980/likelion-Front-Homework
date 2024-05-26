import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="투자가 머니 로고" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/news">뉴스</Link>
        <Link to="/courses">교과서</Link>
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
            <Link to="/login">로그인</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
