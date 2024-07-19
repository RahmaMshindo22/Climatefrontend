import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import EventPage from './components/EventPage';
import Regisration from './components/Regisration';
import Logout from './components/Logout';
import Analytics from './components/Analytics';
import Setting from './components/Setting';
import CalendarView from './components/CalendarView';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="Home" element={<HomePage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/CalendarView" element={<CalendarView />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Regisration" element={<Regisration />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
