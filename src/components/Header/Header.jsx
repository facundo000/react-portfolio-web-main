import React from 'react';
import './header.css';
import CTA from './CTA';
import Avatar from '../../assets/avatar-logo.webp';
import HeaderSocial from './HeaderSocials';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { TbBrandFiverr } from "react-icons/tb";
import UseI8next from '../Services/I8next.js';
import { useTranslation } from 'react-i18next';

import 'aos/dist/aos.css'

const Header = () => {
  const [t] = useTranslation("global");
  return (
    <header>
       <article className="container header__container">
         <h5 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="1200" >{t("header.greeting")}</h5>
         <h1 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="1000" >Facundo Nicolás Guzmán Olariaga</h1>
         <h5 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="900" className="text-light">{t("header.title")}</h5>
         
         <div className="header__direct_socials">
           <a data-aos="fade-down" data-aos-duration="1500" href="https://www.linkedin.com/in/facundo-nicolas-guzman-olariaga-b4516021a" target="_blank" rel="noreferrer" >
              <BsLinkedin alt="Linkedin profile"/>
            </a>
            <a data-aos="fade-down" data-aos-duration="1200" href="https://github.com/facundo000" target="_blank" rel="noreferrer" >
              <FaGithub alt="Github profile"/>
            </a>
            <a data-aos="fade-down" data-aos-duration="1200" href="https://es.fiverr.com/facundo_guzman_?public_mode=true" target="_blank" rel="noreferrer" >
              <TbBrandFiverr alt="Fiverr profile"/>
            </a>
         </div>
          <CTA/>
          <div className="i8next">
            <UseI8next />
          </div>

          <HeaderSocial />

          <div className="logo">
            {/* Image of me */}
            <img className='logo-image' data-aos="slide-up" data-aos-duration="1400" src={Avatar} alt="Avatar of me" loading="lazy"/>
          </div>
          
          <a href="#contact"  className="scroll__down">{t("scroll-down-text")} {'>>'} </a>
        
          
       </article>
       
    </header>
    

  )
}

export default Header