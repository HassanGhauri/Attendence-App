/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {
    FaBars,
    FaUserAlt,
}from "react-icons/fa";
import{IoMdLogOut}from "react-icons/io";
import{RxDashboard}from "react-icons/rx";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Attendence",
            name:"Dashboard",
            icon:<RxDashboard/>
        },
        {
            path:"/Students",
            name:"Students",
            icon:<FaUserAlt/>
        }
        
    ]
    const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

    useEffect(()=>{
        console.log('This is location',location);
        if(location.pathname === '/Students' || location.pathname ==='/Attendence'){
        setShowNavbar(true);
        } else {
        setShowNavbar(false)
        }
    },[location])
    return (
        <div>
         <div className="container">{showNavbar &&
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin Panel</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
        }
           <main>{children }</main>
           
        </div>
            
        </div>
    );
};

export default Sidebar;