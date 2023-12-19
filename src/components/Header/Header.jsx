import React from 'react';
import './header.css';
import CTA from './CTA';
import Avatar from '../../assets/avatar-logo.webp';
import AvatarPng from '../../assets/avatar-logo.jpg';
import HeaderSocial from './HeaderSocials';

import i18n from '../Services/i8next';

import 'aos/dist/aos.css'

const Header = () => {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).catch(err => console.error(err));
  };
  return (
    <header>
       <article className="container header__container">
         <h5 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="1200" >Good morning, afternoon or evening, I'm </h5>
         <h1 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="1000" >Facundo Nicolás Guzmán Olariaga</h1>
         <h5 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="900" className="text-light">Full-stack Developer</h5>
         <CTA/>

         <HeaderSocial />


         <div className="logo">
          {/* Image of me */}
           <img className='logo-image' data-aos="slide-up" data-aos-anchor=".logo"  data-aos-duration="1400" src={Avatar || AvatarPng} alt="me" />
         </div>

         {/* <button onClick={() => changeLanguage('en')}>English </button>
         <button onClick={() => changeLanguage('es')}> - Español</button> */}
        
        
         <a href="#contact"  className="scroll__down">Scroll Down {'>>'} </a>
       </article>

        

    </header>
  )
}

export default Header