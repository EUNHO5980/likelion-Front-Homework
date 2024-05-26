import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={false} /> 
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
