import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import { FaInstagram } from 'react-icons/fa'

import 'aos/dist/aos.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
          <a data-aos="fade-down" data-aos-duration="1500"  href="https://www.linkedin.com/in/facundo-nicolas-guzman-olariaga-b4516021a" target="_blank" rel="noreferrer">
            <BsLinkedin className='size_icon'/>
          </a>
          <a data-aos="fade-down" data-aos-duration="1200" href="https://github.com/facundo000" target="_blank" rel="noreferrer">
           <FaGithub className='size_icon'/>
          </a>          
          <a data-aos-duration="900" data-aos="fade-down"  data-aos-anchor=".header__socials"  href="mailto:facundo.guzman@mi.unc.edu.ar" target="_blank" rel="noreferrer" title="Send me an email">
            <SiGmail className='size_icon'/>
          </a>
          <a data-aos-duration="900" data-aos="fade-down"  data-aos-anchor=".header__socials"  href="https://www.instagram.com/desarrollador_web_freelance/" target="_blank" rel="noreferrer">
            <FaInstagram className='size_icon'/>
          </a>
    </div>
    )
}

export default HeaderSocials