import React from 'react'
import './footer.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si';

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [t] = useTranslation("global");
  
  return (
   <footer className="footer__container">

    <ul className="permalinks" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1400'>
      <li><a href="#">{t("footer-home")}</a></li>
      <li><a href="#about">{t("footer-about")}</a></li>
      <li><a href="#experience">{t("footer-experience")}</a></li>
      <li><a href="#services">{t("footer-services")}</a></li>
      <li><a href="#portfolio">{t("footer-portfolio")}</a></li>
      {/* <li><a href="#reviews">Reviews</a></li> */}
      <li><a href="#contact">{t("footer-contact")}</a></li>
    </ul>


    <div className="footer__socials" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1600'>
      <a href="https://www.linkedin.com/in/facundo-nicolas-guzman-olariaga-b4516021a/"><BsLinkedin/></a>
      <a href="https://www.instagram.com/desarrollador_web_freelance/?hl=es"><BsInstagram/></a>
      <a href="https://leetcode.com/facundo000/"><SiLeetcode/></a>
    </div>

    <div className="footer__copyright" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1800'>
      <small>&copy; Facundo Nicolas Guzmán Olariaga {t("footer-copyright")}</small>
    </div>
   </footer>
  )
}

export default Footer