import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

import { useTranslation } from 'react-i18next';

const Services = () => {
  const [t] = useTranslation("global");

  return (
    <section id='services'>
      <h5 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='700'>{t("sub-title-services")} </h5>
      <h2 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='900'>{t("services-title")}</h2>
      
      <div className="container services__container">
        
        <article className="service" data-aos="fade-up" data-aos-anchor=".services__container"  data-aos-duration="1200">

          <div className="service__head">
            <h3>{t("web-development-title")}</h3>
          </div>

          <ul className="service__list">
            <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("web-development-list1")}</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("web-development-list2")}</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("web-development-list3")}</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("web-development-list4")}</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("web-development-list5")}</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("web-development-list6")}</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("web-development-list7")}</p>
            </li>
          </ul>
        </article>

        {/* End of web development  */}

        <article className="service" data-aos="fade-left" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
            <h3>Freelance</h3>
          </div>

          <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>{t("freelance-list1")}</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>{t("freelance-list2")}</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>{t("freelance-list3")}</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>{t("freelance-list4")}</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>{t("freelance-list5")}</p>
              </li>
              
            </ul>
          </article>

          {/* In the team  */}

          <article className="service" data-aos="fade-right" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
            <h3>{t("in-the-team-title")}</h3>
          </div>

          <ul className="service__list">
             <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("in-the-team-list1")}</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("in-the-team-list2")}</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("in-the-team-list3")}</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>{t("in-the-team-list4")}</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
               <p>{t("in-the-team-list5")}</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
               <p>{t("in-the-team-list6")}</p>
             </li>
          </ul>
        </article>

        {/* END OF UI/UX */}


      </div>
    </section>
  )
}

export default Services