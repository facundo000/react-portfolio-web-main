import React from 'react';
import './experience.css';
import TimeLine from './timeLine';

import CardSpotlightEffect from './CardSpotlightEffect';

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

          <section className='s_skills' data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='1000'>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300" >{t("skill-1")}</span>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{t("skill-2")}</span>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{t("skill-3")}</span>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"> {t("skill-4")}</span>
            <span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{t("skill-5")}</span>
          </section>
      </div>
      <div className='time-line'>
        {/* <TimeLine/> */}
      </div>
    </section>
  )
}

export default Experience