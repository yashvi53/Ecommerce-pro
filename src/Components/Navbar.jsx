import React from 'react'
import "../Components/Navbar.css"
import {BiSearchAlt2} from "react-icons/bi"
import {BsCartFill} from "react-icons/bs"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
   <div className='nav-container'>
       <div className="nav-wrapper">
        <div className="nav-left">
            <div className="lanugauge">
                EN
            </div>
         <div className="search-container">
            <input type="text" />
          <span style={{fontSize:"18px"}}><BiSearchAlt2/></span>
         </div>
        </div>
        <div className="nav-center">
             <img src={logo} alt="" />
        </div>
        <div className="nav-right">
          <div className="menu-items">
            <span>Register</span>
            <span>Sign In</span>
          <span>< BsCartFill/></span> 
          </div>
        </div>
       </div>
   </div>
  )
}

export default Navbar
