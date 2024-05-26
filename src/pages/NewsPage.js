import React from 'react';
import './NewsPage.css';
import NewsItem from '../components/NewsItem';

const newsData = [
  {
    id: 1,
    title: "[리포트 브리핑] 삼성전자, '기회가 왔다' 목표가 94,000원",
    content: "[서울 = 뉴스핌]  로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해 ‘기회가 왔다’라며 투자의견 ‘매수(유지)’의 신규 리포트를 발행하였고, 목표가 94,000원으로 내놓았다...",
    source: "로보뉴스",
    imageUrl: "https://via.placeholder.com/80"
  },
  {
    id: 2,
    title: "[리포트 브리핑] 삼성전자, '기회가 왔다' 목표가 94,000원",
    content: "서울 뉴스 핫한 뉴스 환율, 투자 리포트...",
    source: "로보뉴스",
    imageUrl: "https://via.placeholder.com/80"
  },
  {
    id: 3,
    title: "[리포트 브리핑] 삼성전자, '기회가 왔다' 목표가 94,000원",
    content: "서울 뉴스 핫한 뉴스 환율, 투자 리포트...",
    source: "로보뉴스",
    imageUrl: "https://via.placeholder.com/80"
  },
  {
    id: 4,
    title: "[리포트 브리핑] 삼성전자, '기회가 왔다' 목표가 94,000원",
    content: "서울 뉴스 핫한 뉴스 환율, 투자 리포트...",
    source: "로보뉴스",
    imageUrl: "https://via.placeholder.com/80"
  },
  {
    id: 5,
    title: "[리포트 브리핑] 삼성전자, '기회가 왔다' 목표가 94,000원",
    content: "서울 뉴스 핫한 뉴스 환율, 투자 리포트...",
    source: "로보뉴스",
    imageUrl: "https://via.placeholder.com/80"
  }
];

const NewsPage = () => {
  return (
    <div className="news-page">
      <h1>전체 뉴스</h1>
      <div className="news-list">
        {newsData.map(news => (
          <NewsItem
            key={news.id}
            title={news.title}
            content={news.content}
            source={news.source}
            imageUrl={news.imageUrl}
          />
        ))}
      </div>
      <footer className="news-footer">
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

export default NewsPage;
