import React from 'react';
import './CoursesPage.css';
import SectionTitle from '../components/SectionTitle';
import icon1 from '../assets/icon.png';
import icon2 from '../assets/icon.png';
import icon3 from '../assets/icon.png';

const courseData = [
  {
    id: 1,
    title: "기업 실적 분석에 쓰이는 재무제표에 대해 알아볼까요?",
    imageUrl: icon1
  },
  {
    id: 2,
    title: "주요 지수, 코스피 코스닥이란?",
    imageUrl: icon2
  },
  {
    id: 3,
    title: "주식 기본 용어, 알고 시작하자!",
    imageUrl: icon3
  }
];

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <h1 className="main-title">교과서</h1>
      <div className="courses-list">
        {courseData.map(course => (
          <div key={course.id} className="course-item">
            <SectionTitle title={course.title} icon={course.imageUrl} />
          </div>
        ))}
      </div>
      <footer className="courses-footer">
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

export default CoursesPage;
