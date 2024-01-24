import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import ProgressBar from './progressBar'

import { useTranslation } from 'react-i18next';

const Experience = () => {
  const [t] = useTranslation("global");
  return (
    <section id='experience'>
      <h5 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='900'>{t("sub-title-skills")} </h5>
      <h2 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='700'>{t("title-skills")}</h2>


      <div className="container experience__container">
        <div className="experience__frontend" data-aos="fade-right" data-aos-anchor=".experience__container"  data-aos-duration="900">
        <h3>Frontend</h3>
            <div className="experience__content">
              {/* HTML  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="HTML" level={70} /><small>70%</small></div>
                </div>
              </article>

              {/* CSS  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="CSS" level={70} /><small>70%</small></div>
                </div>
              </article>

              {/* JavaScript  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="JavaScript" level={25} /><small>25%</small></div>
                </div>
              </article>
              
              {/* Sass  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="Sass" level={15} /><small>15%</small></div>
                </div>
              </article>

              {/* Angular  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="Angular" level={40} /><small>40%</small></div>
                </div>
              </article>

              {/* Bootstrap  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="Bootstrap" level={60} /><small>60%</small></div>
                </div>
              </article>
            </div>
        </div>

        {/* BACKEND SKILLS */}
      
        <div className="experence__backend" data-aos="fade-left" data-aos-anchor=".experience__container"  data-aos-duration="1200">
           <h3>Backend</h3>
            <div className="experience__content">
              {/* Node JS  */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="Node JS" level={25} /><small>20%</small></div>
                </div>
              </article> */}

              {/* Express  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="Express" level={30} /><small>30%</small></div>
                </div>
              </article>
              
              {/* Nest  */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="Nest" level={15} /><small>15%</small></div>
                </div>
              </article> */}
              
              {/* MySQL  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="MySQL" level={20} /><small>20%</small></div>
                </div>
              </article>

              {/* Strapi  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="Strapi" level={8} /><small>8%</small></div>
                </div>
              </article>

               {/* Postman  */}
               <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <div> <ProgressBar skill="Postman" level={25} /><small>25%</small></div>
                </div>
              </article>

            </div>
        </div>
      </div>
    </section>
    // estaria bueno agregar aca una seccion de herramientas que utilizo como Figma, LightHouse, FontsAwesome, Linux, GitHub, Git , Trello
  )
}

export default Experience