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

      <div className="container experience__container soft">
         <h5 className='rol' data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='900'>{t("soft-skills")}</h5>

          <section className='s_skills'>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{t("skill-1")}</span>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{t("skill-2")}</span>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{t("skill-3")}</span>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"> {t("skill-4")}</span>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{t("skill-5")}</span>
          </section>
      </div>
      <div className='time-line'>
        <TimeLine/>
      </div>
    </section>
  )
}

export default Experience