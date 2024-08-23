/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
const EditStudent = ({setEditModal,onEditStudent, student}) => {
  console.log(student._id)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seatno, setSeatNo] = useState(Number);
  const [department, setDepartment] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [totalattendence, setTotalAttendence] = useState(Number);
  
  const fetchStudent = async()=>{
    const data = await axios.get(`http://localhost:3000/api/student/${student._id}`);
    setName(data.data.name);
    setEmail(data.data.email);
    setSeatNo(data.data.seatno);
    setDepartment(data.data.department);
    setPassword(data.data.password);
    setCheckin(data.data.checkin);
    setCheckout(data.data.checkout);
    setTotalAttendence(data.data.totalattendence);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const stu = {seatno,name,email,password,department,checkin,checkout,totalattendence}
    try {
      const data = axios.patch(`http://localhost:3000/api/student/update/${student._id}`, stu)
      .then((res)=>{
        onEditStudent(res.data);
      })
      setEditModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchStudent();
  },[])
  return (
    <div className='edit-backshadow'>
        <div className='edit-modal'>
            <div className='delete-icon' onClick={()=>{setEditModal(false)}}>x</div>
            <h2><FaUserCircle/> Edit Student</h2>
            <div>
            <form
            className="edit-form-group"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br></br>
            <input
              type="number"
              placeholder="Seat Number"
              value={seatno}
              onChange={(e) => {
                setSeatNo(e.target.value);
              }}
            />
            <br></br>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br></br>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Checkin"
              value={checkin}
              onChange={(e) => {
                setCheckin(e.target.value);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Checkout"
              value={checkout}
              onChange={(e) => {
                setCheckout(e.target.value);
              }}
            />
            <br></br>
            <input
              type="number"
              placeholder="Total Attendence"
              value={totalattendence}
              onChange={(e) => {
                setTotalAttendence(e.target.value);
              }}
            />
            <br></br>
            <button type="submit">Add</button>
          </form>
            </div>
        </div>
    </div>
  )
}

export default EditStudent
