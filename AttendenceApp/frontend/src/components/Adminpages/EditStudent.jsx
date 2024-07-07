/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const EditStudent = ({setEditModal}) => {
  return (
    <div className='edit-backshadow'>
        <div className='edit-modal'>
            <div className='delete-icon' onClick={()=>{setEditModal(false)}}>x</div>
            <h2><FaUserCircle/> Edit Student</h2>
            <div>
            <form className='edit-form-group'>
              <input type='text' placeholder='Name' />
              <br></br>
              <input type='text' placeholder='Seat Number' />
              <br></br>
              <input type='email' placeholder='Email' />
              <br></br>
              <input type='password' placeholder='Password' />
              <br></br>
              <input type='text' placeholder='Department' />
              <br></br>
              <input type='text' placeholder='Checkin' />
              <br></br>
              <input type='text' placeholder='Checkout' />
              <br></br>
              <input type='text' placeholder='Total Attendence' />
              <br></br>
              <button type='submit'>Edit</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default EditStudent