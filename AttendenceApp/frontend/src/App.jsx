/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Students from './components/Adminpages/Students.jsx';
import UserDashboard from './components/UserPages/UserDashboard.jsx';
import Attendence from './components/Adminpages/Attendence.jsx';
import SignIn from './components/SignIn.jsx';
const App = () => {
  return (
    <BrowserRouter>     
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/Students" element={<Students />} />
            <Route exact path="/Attendence" element={<Attendence />} />
            <Route path="/user/dashboard/:id" element={<UserDashboard />} />
          </Routes>
        </Sidebar>
    </BrowserRouter>
  );
};

export default App;