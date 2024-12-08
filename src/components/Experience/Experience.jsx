import React from 'react';
import './experience.css';
import TimeLine from './timeLine';

import CardSpotlightEffect from './CardSpotlightEffect';

import { 
  SiAngular,
  SiNestjs,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiDotnet   
 } from "react-icons/si";
 import { 
  FaHtml5,
  FaCss3Alt,
  FaDocker
 } from "react-icons/fa";
 import { DiJavascript } from "react-icons/di";
 import { BiLogoPostgresql } from "react-icons/bi";



import { useTranslation } from 'react-i18next';

const Experience = () => {
  const [t] = useTranslation("global");
  return (
    <section id='experience'>
      <h5 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='900'>{t("sub-title-skills")} </h5>
      <h2 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='700'>{t("title-skills")}</h2>

      <div className="container experience__container" data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='700'>
     
      <CardSpotlightEffect />                

      </div>

      <div className='time-line'>
        <TimeLine/>
      </div>
    </section>
    // estaria bueno agregar aca una seccion de herramientas que utilizo como Figma, LightHouse, FontsAwesome, Linux, GitHub, Git , Trello
  )
}

export default Experience