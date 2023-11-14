import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiWhatsapp} from 'react-icons/si'
import {SiGmail} from 'react-icons/si'
import { FaInstagram } from 'react-icons/fa'

import 'aos/dist/aos.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
          <a data-aos="fade-down" data-aos-duration="1500"  href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BGM44sSqrQE6IEfFeDr5XTA%3D%3D" target="_blank" rel="noreferrer">
            <BsLinkedin/>
          </a>
          <a data-aos="fade-down" data-aos-duration="1200" href="https://github.com/facundo000" target="_blank" rel="noreferrer">
           <FaGithub/>
          </a>
          <a data-aos-duration="900" data-aos="fade-down"  data-aos-anchor=".header__socials"  href="https://wa.link/46dn05" target="_blank" rel="noreferrer">
            <SiWhatsapp/>
          </a>
          <a data-aos-duration="900" data-aos="fade-down"  data-aos-anchor=".header__socials"  href="mailto:facundo.guzman@mi.unc.edu.ar" target="_blank" rel="noreferrer" title="Send me an email">
            <SiGmail/>
          </a>
          <a data-aos-duration="900" data-aos="fade-down"  data-aos-anchor=".header__socials"  href="https://www.instagram.com/desarrollador_web_freelance/" target="_blank" rel="noreferrer">
            <FaInstagram/>
          </a>
    </div>
    )
}

export default HeaderSocials