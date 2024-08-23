/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import { PiStudentFill } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";
import { TbPassword } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import {useNavigate} from 'react-router-dom'
import { MdLabelImportant } from "react-icons/md";
import { MdCelebration } from "react-icons/md";
import image from './image.jpg'
import axios from 'axios';
const SignIn = () => {
  const[email,SetEmail] = useState('');
  const[password,SetPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/student/login",{email,password})
    .then((res)=>{
      console.log(res.data.id);
      if(res.data.mssg === "User Success"){
        navigate('/user/dashboard/'+res.data.id);
      } else{
        navigate('/Students');
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
        <div className='heading'>
          <h1><PiStudentFill /> Attend Inn</h1>
        </div>
        <div className='heroPara'>
          <h2><span><MdCelebration/></span> Welcome to Attend Inn, An efficient Online Attendence Managment Portal. <span><MdCelebration/></span></h2>
        </div>
        <div className='instructions'>
          <p><MdLabelImportant/>Please Sign in with the email and password provided to you  by the department head and 
           view or mark your attendence.</p>
        </div>
        <div className='heroSection'>
          <img src={image} />
          <p><span><MdCelebration/></span> Mark Attendence on the web with no worries of paper attendence!<span><MdCelebration/></span></p>
        </div>
        <div className='heroSection1'>
          <img src={image} />
          <p><span><MdCelebration/></span> Mark Attendence on the web with no worries of paper attendence!<span><MdCelebration/></span></p>
        </div>
         <div className="create">
          <h2><PiStudentBold /> Sign In</h2>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Email <MdEmail /></label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            />
            <label>Password <TbPassword /></label>
            <input
              type='password'
              required
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            ></input>
            <button type='submit'>Enter</button>
          </form>
    </div>
      

    </div>
  )
}

export default SignIn
