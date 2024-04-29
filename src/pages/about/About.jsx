import React from 'react'
import img from '../../img/about.jpg';
import './about.css';

const About = () => {
  return (
    <div className='about container'>
      <h2 className='a'>About <span>Us</span></h2>

      <div className="about-content">
      <div className="about-left">
        <img src={img} alt="" />
      </div>
      <div className="about-right">
        <h2>Welcome To <span>Bravo Shop</span></h2>
        <h3>
        <span>Bravo Shop</span> is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente.

        </h3>
        <button>Shop Now</button>
      </div>
      </div>

     
    </div>
  )
}

export default About
