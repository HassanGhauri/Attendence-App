/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { SlNotebook } from "react-icons/sl";
import { PiStudentFill } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";

const Attendence = () => {
  const [students,setStudents] = useState([]);
  const fetchStudents = async()=>{
    const data = await axios.get("https://attendence-app-backend.vercel.app/api/student");
    setStudents(data.data)
    console.log(data.data);
  }
  
  useEffect(()=>{
    fetchStudents();
  },[])
  return (
    
    <div>
      <div className='heading'>
          <h1><PiStudentFill/> Attend Inn</h1>
        </div>
      <div className='at_heading'>
        <div className='at_icon'><SlNotebook/></div>
        <h2> Students Attendence List</h2>
      </div>
      
        <div className='stu_table'>
          <table>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Total Attendence</th>
              <th>Last Checkin</th>
              <th>Last Checkout</th>

            </tr>
            {students.map((stu,idx)=>{
              return(
                <tr key={idx}>
                  <td>{stu.name}</td>
                  <td>{stu.department}</td>
                  <td>{stu.totalattendence}</td>
                  <td>{stu.checkin}</td>
                  <td>{stu.checkout}</td>
                </tr>
              )
            })}
          </table>
        </div>
        <div className='stu_logout'>
          <NavLink className='stu_link' to="/"><IoLogOut/></NavLink>
          <p>Logout</p>
    </div>
    </div>
  )
}

export default Attendence