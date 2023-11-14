import React from 'react'
import './footer.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'

const Footer = () => {
  return (
   <footer className="footer__container">

    <ul className="permalinks" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1400'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      {/* <li><a href="#reviews">Reviews</a></li> */}
      <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="footer__socials" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1600'>
      <a href="https://www.linkedin.com/in/facundo-nicolas-guzman-olariaga-b4516021a/"><BsLinkedin/></a>
      <a href="https://www.instagram.com/desarrollador_web_freelance/?hl=es"><BsInstagram/></a>
      <a href="https://leetcode.com/facundo000/"><SiLeetcode/></a>
    </div>

    <div className="footer__copyright" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1800'>
      <small>&copy; Facundo Guzmán Web Programmer. All rights reserved</small>
      <small>v1</small>
    </div>
   </footer>
  )
}

export default Footer