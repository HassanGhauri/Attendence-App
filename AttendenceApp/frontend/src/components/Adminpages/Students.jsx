/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {MdDelete } from 'react-icons/md';
import { FaUserCircle } from "react-icons/fa";
import AddStudent from './AddStudent';
import Button from './Button';
import EditButton from './EditButton';
import EditStudent from './EditStudent';
const Students = () => {
  const [students,setStudents] = useState([]);
  const [modal,setModal] = useState(false);
  const [editModal,setEditModal] = useState(false);
  const fetchStudents = async()=>{
    const data = await axios.get("http://localhost:3000/api/student");
    setStudents(data.data)
    console.log(data.data);
  }
  
  useEffect(()=>{
    fetchStudents();
  },[])
  return (
    <div>
      <div className='heading'>
        <h1>
          Students
        </h1>
      </div>
      <div className='stu_heading'>
        <div className='stu_icon'><FaUserCircle/></div>
        <h2>Students</h2>
        <div className='add_stu'>
          <Button setModal={setModal} />
          {modal===true &&(
            <AddStudent setModal={setModal}/>
          )}
        </div>
      </div>
      
        <div className='stu_table'>
          <table>
            <tr>
              <th>Name</th>
              <th>Seat No</th>
              <th>Email</th>
              <th>Password</th>
              <th>Department</th>
              <th>Total Attendence</th>
              <th>Last Checkin</th>
              <th>Last Checkout</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {students.map((stu,idx)=>{
              return(
                <tr key={idx}>
                  <td>{stu.name}</td>
                  <td>{stu.seatNo}</td>
                  <td>{stu.email}</td>
                  <td>{stu.password}</td>
                  <td>{stu.department}</td>
                  <td>{stu.totalAttendence}</td>
                  <td>{stu.checkin}</td>
                  <td>{stu.checkout}</td>
                  <td><div><EditButton setEditModal={setEditModal}/>{editModal===true &&(
                      <EditStudent setEditModal={setEditModal}/>
                      )}</div></td>
                  <td><MdDelete/></td>
                </tr>
              )
            })}
          </table>
        </div>
    </div>
  )
}

export default Students