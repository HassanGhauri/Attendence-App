/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

const AddStudent = ({ setModal, onAddStudent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seatno, setSeatNo] = useState("");
  const [department, setDepartment] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [totalattendence, setTotalAttendence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = axios.post("https://attendence-app-backend.vercel.app/api/student", {
        seatno,
        name,
        email,
        password,
        department,
        checkin,
        checkout,
        totalattendence,
      }).then((res)=>{
        onAddStudent(res.data);
      })
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="backshadow">
      <div className="modal">
        <div
          className="delete-icon"
          onClick={() => {
            setModal(false);
          }}
        >
          x
        </div>
        <h2>
          <FaUserCircle /> Add Student
        </h2>
        <div>
          <form
            className="form-group"
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
  );
};

export default AddStudent;
