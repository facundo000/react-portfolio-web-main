import React from 'react';
import './header.css';
import CTA from './CTA';
import Avatar from '../../assets/avatar-logo.webp';
import AvatarPng from '../../assets/avatar-logo.jpg';
import HeaderSocial from './HeaderSocials';

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
         
         
          <CTA/>
          <div className="i8next">
            <UseI8next />
          </div>

          <HeaderSocial />

          <div className="logo">
            {/* Image of me */}
            <img className='logo-image' data-aos="slide-up" data-aos-duration="1400" src={Avatar} alt="Avatar of me" loading="lazy"/>
            <source src={AvatarPng}/>
          </div>
          
          <a href="#contact"  className="scroll__down">{t("scroll-down-text")} {'>>'} </a>
        
          
       </article>
       
    </header>
    

  )
}

export default Header