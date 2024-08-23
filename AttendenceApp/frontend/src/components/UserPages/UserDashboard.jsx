/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { NavLink,useNavigate,useParams } from 'react-router-dom';
import { PiStudentFill } from 'react-icons/pi';
import { FaCheck } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import axios from 'axios';

const UserDashboard = () => {
  const {id} = useParams();
  const [isCheckoutDisabled,setIsCheckoutDisabled] = useState(false);
  const [date,setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seatno, setSeatNo] = useState("");
  const [department, setDepartment] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [totalattendence, setTotalAttendence] = useState(Number);
  const fetchStudent = async()=>{
    const data = await axios.get(`http://localhost:3000/api/student/${id}`);
    setName(data.data.name);
    setEmail(data.data.email);
    setSeatNo(data.data.seatno);
    setDepartment(data.data.department);
    setCheckin(data.data.checkin);
    setCheckout(data.data.checkout);
    setTotalAttendence(data.data.totalattendence);
  }

  

  const handleCheckin = async(e)=>{
    
    e.persist();
    setIsCheckoutDisabled(true)
    const dte = new Date();
    const dt = `${dte.getDate()}-${dte.getMonth()+1}-${dte.getFullYear()} ${dte.getHours()}:${dte.getMinutes()}`
    const chckin = dt.toString();
    
    setDate(dt.toString());
    setCheckin(dt.toString()); 
    
    const data = {checkin:chckin};
    await axios.patch("http://localhost:3000/api/student/update/"+id, data);
    console.log(data);


    const disableUntil = Date.now() + 300000; // 30 seconds
    localStorage.setItem('checkoutDisabledUntil', disableUntil);

    setTimeout(() => {
      setIsCheckoutDisabled(false);
      localStorage.removeItem('checkoutDisabledUntil');
    }, 300000);
    
  };

  const handleCheckout = async(e)=>{
    if(!isCheckoutDisabled){
      e.persist();
    const dte = new Date();
    const dt = `${dte.getDate()}-${dte.getMonth()+1}-${dte.getFullYear()} ${dte.getHours()}:${dte.getMinutes()}`
    const chckout = dt.toString();
    const tolatt = totalattendence + 1;
    setTotalAttendence(totalattendence+1);
    setCheckout(dt.toString()); 
    const data = {checkout:chckout,totalattendence:tolatt};
    await axios.patch("http://localhost:3000/api/student/update/"+id, data);
    console.log(data);
    }
  };
  
  useEffect(()=>{
    fetchStudent();
    const disableUntil = localStorage.getItem('checkoutDisabledUntil');
    if (disableUntil && Date.now() < disableUntil) {
      setIsCheckoutDisabled(true);
      const remainingTime = disableUntil - Date.now();
      setTimeout(() => {
        setIsCheckoutDisabled(false);
        localStorage.removeItem('checkoutDisabledUntil');
      }, remainingTime);
    }
   
  },[]);
  return (
    <div>
    <div className='heading'>
        <h1><PiStudentFill/> Attend Inn</h1>
    </div>
    <div className='stu_heading'>
      <div className='stu_icon'><FaUserCircle/></div>
      <h2>Student Name: {name}</h2>
      <h3>Student Email: {email}</h3>
      <h3>Student Department: {department}</h3>
      <h3>Student SeatNo: {seatno}</h3>
      <h3>Student Total Attendence: {totalattendence}</h3>
      <h3>Student Last CheckedIn at: {checkin}</h3>
      <h3>Student Last Checkedout at: {checkout}</h3>
    </div>
    <div className='checkinout'>
      <div>
        <button onClick={(e)=>handleCheckin(e)}><FaCheck/> CheckIn</button>
      </div>
      <div>
        <button onClick={(e)=>handleCheckout(e)}  disabled={isCheckoutDisabled} className={isCheckoutDisabled ? 'disabled':'enabled'}><IoExit/> CheckOut</button>
        {isCheckoutDisabled && <p>The class will end in 5 minutes,<br></br> after which you can checkout</p>}
      </div>
      

      
    </div>
    <div className='stu_logout1'>
        <NavLink className='stu_link' to="/"><IoLogOut/></NavLink>
        <p>Logout</p>
    </div>
  </div>
  )
}

export default UserDashboard


