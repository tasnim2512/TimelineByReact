import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timeline from './Components/Timeline';
import UserDetail from './Components/UserDetail';
import Header from './Components/Header';
import ThemeToggle from './Components/ThemeToggle';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/user/:userId" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
