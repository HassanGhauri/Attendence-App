/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Adminpages/Dashboard.jsx';
import Logout from './components/Adminpages/Logout.jsx'
import Students from './components/Adminpages/Students.jsx';
import UserDashboard from './components/UserPages/UserDashboard.jsx';
import UserAttendence from './components/UserPages/UserAttendence.jsx'
import UserLogout from './components/UserPages/UserLogout.jsx';
import Attendence from './components/Adminpages/Attendence.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/Logout" element={<Logout />} />
          <Route exact path="/Students" element={<Students />} />
          <Route exact path="/Attendence" element={<Attendence />} />
          <Route exact path="/UserDashboard" element={<UserDashboard />} />
          <Route exact path="/UserAttendence" element={<UserAttendence />} />
          <Route exact path="/UserLogout" element={<UserLogout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;