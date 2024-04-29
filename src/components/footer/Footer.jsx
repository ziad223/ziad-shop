import React from 'react';
import './footer.css';
import { FaLocationDot  } from "react-icons/fa6";
import {  FaEnvelope , FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter  } from "react-icons/fa";
import img from '../../img/payments.png';

const Footer = () => {
  return (
    <footer>
     <div className="footer-content">
      <div className="footer-up">
      <div className='h'>
        <h2>GET IN TOUCH</h2>
        <p>
        No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no
        </p>
       
      </div>
      <div className='h'>
        <h2>QUICK SHOP</h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart</a></li>
        </ul>
      </div>
      <div className='h'>
        <h2>Social Media</h2>
        <ul>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaFacebook/></a></li>
            <li><a href="#"><FaLinkedin/></a></li>
            <li><a href="#"><FaInstagram/></a></li>
            <li><a href="#"><FaGithub/></a></li>
        </ul>
      </div>
      <div className='h'>
        <h2>NEWSLETTER</h2>
        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est
</p>
 <div className="footer-search">
    <input type="text" placeholder='Your Email Address' />
    <button>Subscribe</button>
 </div>
      </div>
      </div>
      <hr />
      <div className="footer-down">
        <p>@ copywrite By Bravo Team , All Right Reserved</p>
         <img src={img} alt="" />
      </div>
     </div>
    </footer>
  )
}

export default Footer
