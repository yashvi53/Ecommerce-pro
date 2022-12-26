import React from 'react'
import logo from "../images/logo.png"
import "./Footer.css"
import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsFillPhoneFill } from 'react-icons/bs'
import {RiMailLine} from "react-icons/ri"
const Footer = () => {
  return (
  <div className="footer-container">
    <div className="left-footer">
        <img src={logo} alt="" />
       <p className="footer-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita temporibus consequatur laboriosam natus, tenetur quae fuga aut, quia nam assumenda veniam ducimus animi distinctio ipsa dicta delectus quisquam. Iusto!

       </p>
       <div className="social-icons">
        <span className="facebook" > <BsFacebook size={"30px"}/> </span>
        <span className="instagram"> <BsInstagram size={"30px"}/> </span>
        <span className="twitter"> <BsTwitter size={"30px"}/> </span>
        <span className="linkedin"> <BsLinkedin size={"30px"}/> </span>
       </div>

    </div>
    <div className="center-footer">
     <h3 className="footer-title">Usefull Links</h3>
     <ul className="footer-links">
      <li>Home</li>
      <li>Summer Collection</li>
      <li>Winter Collection</li>
      <li>New Arrivals</li>
      <li>Wishlist</li>
      <li>Order Tracking</li>
      <li>My Acoount</li>
      <li>Terms and conditions</li>
     </ul>

    </div>
    <div className="right-footer">
    <div className="contact-item">
          <h3>Contact Us</h3>
          
          <p className="phone-num"> <BsFillPhoneFill size={"20px"}/> +91 2838838327</p>
          <p className="email"> <RiMailLine size={"20px"}/> yashvisoni@gmail.com</p>
          </div>
    </div>
  </div>
  )
}

export default Footer
