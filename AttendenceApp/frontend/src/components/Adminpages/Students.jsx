/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import AddStudent from "./AddStudent";
import Button from "./Button";
import EditButton from "./EditButton";
import EditStudent from "./EditStudent";
import Sidebar from "../Sidebar";
import { PiStudentFill } from "react-icons/pi";
const Students = () => {
  const [students, setStudents] = useState([]);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const handleDelete = async (id) => {
    const data = await axios.delete(
      `http://localhost:3000/api/student/delete/${id}`
    );
    const updatedstudents = students.filter(
      (stu) => stu.email !== data.data.email
    );
    console.log(updatedstudents);
    setStudents(updatedstudents);
  };
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    setModal(false);
  };
  

  const handleEditStudent = (updatedStudent) => {
    const updatedStudents = students.map((stu) =>
      stu._id === updatedStudent._id ? updatedStudent : stu
    );
    setStudents(updatedStudents);
    setEditModal(false);
  };

  const fetchStudents = async () => {
    const data = await axios.get("https://attendence-app-backend.vercel.app/api/student");
    setStudents(data.data);
  };

  useEffect(() => {
    fetchStudents();

  }, []);

  return (
    <div>

        <div className="heading">
          <h1>
            <PiStudentFill /> Attend Inn
          </h1>
        </div>
        <div className="stu_heading">
          <div className="stu_icon">
            <FaUserCircle />
          </div>
          <h2>Students</h2>
          <div className="add_stu">
            <Button setModal={setModal} />
            {modal === true && (
              <AddStudent onAddStudent={handleAddStudent} setModal={setModal} />
            )}
          </div>
        </div>

        <div className="stu_table">
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
            {students.map((stu, idx) => {
              return (
                <tr key={idx}>
                  <td>{stu.name}</td>
                  <td>{stu.seatno}</td>
                  <td>{stu.email}</td>
                  <td>{stu.password}</td>
                  <td>{stu.department}</td>
                  <td>{stu.totalattendence}</td>
                  <td>{stu.checkin}</td>
                  <td>{stu.checkout}</td>
                  <td>
                    <div onClick={() => setStudentToEdit(stu)}>
                    <EditButton setEditModal={setEditModal}  />
                    {editModal && studentToEdit && studentToEdit._id === stu._id && (
                        <EditStudent student={studentToEdit} onEditStudent={handleEditStudent} setEditModal={setEditModal} />
                      )}
                    </div>
                  </td>
                  <td>
                    <div
                      className="delete-stu"
                      onClick={() => {
                        handleDelete(stu._id);
                      }}
                    >
                      <MdDelete />
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>

    </div>
  );
};

export default Students;
