/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Button = ({setModal}) => {
  return (
    <button className='add_stu' onClick={()=>setModal(true)}>Add Student</button>
  )
}

export default Button