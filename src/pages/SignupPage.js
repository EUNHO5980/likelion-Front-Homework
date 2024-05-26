import React from 'react';
import './SignupPage.css';
import Button from '../components/Button';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>회원가입</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" placeholder="이름" />
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <div className="email-container">
              <input type="email" id="email" placeholder="이메일" />
              <button type="button" className="verify-button">인증하기</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" placeholder="비밀번호" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">비밀번호 재입력</label>
            <input type="password" id="confirm-password" placeholder="비밀번호 재입력" />
          </div>
          <Button label="회원가입" />
        </form>
      </div>
      <footer className="signup-footer">
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

export default SignupPage;
