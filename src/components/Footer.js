import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/terms">이용약관</a>
      <span className="divider">|</span>
      <a href="/privacy">개인정보처리방침</a>
      <span className="divider">|</span>
      <a href="/support">고객센터</a>
      <span className="divider">|</span>
      <a href="/business-info">사업자 정보확인</a>
    </footer>
  );
};

export default Footer;
