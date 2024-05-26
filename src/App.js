import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NewsPage from './pages/NewsPage';
import CoursesPage from './pages/CoursesPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={false} />
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
