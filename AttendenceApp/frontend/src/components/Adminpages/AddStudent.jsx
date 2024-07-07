/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const AddStudent = ({setModal}) => {
  return (
    <div className='backshadow'>
        <div className='modal'>
            <div className='delete-icon' onClick={()=>{setModal(false)}}>x</div>
            <h2><FaUserCircle/> Add Student</h2>
            <div>
            <form className='form-group'>
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
              <button type='submit'>Add</button>
            </form>

            </div>
            
        </div>
    </div>
  )
}

export default AddStudent