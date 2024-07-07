/* eslint-disable no-unused-vars */
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      <div className='heading'>
        <h1>
          Admin Dashboard
        </h1>
      </div>
      <div className='adm_heading'>
        <div className='adm_icon'><FaUserCircle/></div>
        <h2>Admin Online: Muhammad Hassan Ghauri</h2>
        <h3>Email: hassan@gmail.com</h3>
        <div className='adm_logout'>
          <NavLink className='adm_link'><IoLogOut/></NavLink>
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard