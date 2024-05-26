import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Button from '../components/Button';
import kakaoIcon from '../assets/kakao.png';
import naverIcon from '../assets/naver.png';
import googleIcon from '../assets/google.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>사용자 로그인</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">이메일 주소</label>
            <input type="email" id="email" placeholder="이메일 주소" />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" placeholder="비밀번호" />
          </div>
          <div className="form-group remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">아이디 기억하기</label>
          </div>
          <Button label="로그인" />
        </form>
        <div className="social-login">
          <p className="signup-text" onClick={handleSignupClick}>이메일로 회원가입</p>
          <div className="social-icons">
            <button className="social-icon">
              <img src={kakaoIcon} alt="카카오톡 로그인" />
            </button>
            <button className="social-icon">
              <img src={naverIcon} alt="네이버 로그인" />
            </button>
            <button className="social-icon">
              <img src={googleIcon} alt="구글 로그인" />
            </button>
          </div>
        </div>
      </div>
      <footer className="login-footer">
        <a href="/terms">이용약관</a>
        <span className="divider">|</span>
        <a href="/privacy">개인정보처리방침</a>
        <span className="divider">|</span>
        <a href="/support">고객센터</a>
        <span className="divider">|</span>
        <a href="/business-info">사업자 정보확인</a>
      </footer>
    </div>
  );
};

export default LoginPage;
