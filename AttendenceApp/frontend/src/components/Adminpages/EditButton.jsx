/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {FaUserEdit } from 'react-icons/fa';
const EditButton = ({setEditModal}) => {
  return (
    <div className='edit-stu' onClick={()=>setEditModal(true)}><FaUserEdit/></div>
  )
}

export default EditButton