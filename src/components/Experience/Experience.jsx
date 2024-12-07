import React from 'react';
import './experience.css';
import TimeLine from './timeLine';

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

      <div className="container experience__container">
     
        {/* Technical Skills */}
      
        <div className="experence__backend" data-aos="fade-left" data-aos-anchor=".experience__container"  data-aos-duration="1200">
           <h3 className="rol" > Technical Skills</h3>
            <section className='skills'>
            <div className="experience__content">
                            
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    Angular
                   </span>
                  <SiAngular className='icon' style={{ marginLeft: 15 }}/>
                </div>
              </article>

              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    NestJs
                   </span>
                  <SiNestjs className='icon' style={{ marginLeft: 15 }}/>
                </div>
              </article>
              
              <article className="experience__details">                
                <div>
                  <span className='title_skill'>
                    HTML
                   </span>
                  <FaHtml5 className='icon' style={{ marginLeft: 5 }}/>
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    CSS
                   </span>
                  <FaCss3Alt className='icon' style={{ margin: 0}} />
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    JavaScript
                   </span>
                  <DiJavascript className='icon' />
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    PostgreSQL
                   </span>
                  <BiLogoPostgresql className='icon' />
                </div>
              </article>

              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    MongoDB
                   </span>
                  <SiMongodb className='icon' />
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    SQL Server
                   </span>
                  <SiMicrosoftsqlserver className='icon' />
                </div>
              </article>
               
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    Docker
                   </span>
                  <FaDocker className='icon' />
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    .NET Core
                   </span>
                  <SiDotnet className='icon' />
                </div>
              </article>

            </div>
              </section>
       
        </div>

        {/* Soft   Skills */}
        {/* <div className="experence__backend" data-aos="fade-left" data-aos-anchor=".experience__container"  data-aos-duration="1200">
           <h3 className="rol" >Soft Skills</h3>
            <section className='skills'>
            <div className="experience__content">
                            
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    Angular
                   </span>
                  <SiAngular className='icon' style={{ marginLeft: 15 }}/>
                </div>
              </article>

              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    NestJs
                   </span>
                  <SiNestjs className='icon' style={{ marginLeft: 15 }}/>
                </div>
              </article>
              
              <article className="experience__details">                
                <div>
                  <span className='title_skill'>
                    HTML
                   </span>
                  <FaHtml5 className='icon' style={{ marginLeft: 5 }}/>
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    CSS
                   </span>
                  <FaCss3Alt className='icon' style={{ margin: 0}} />
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    JavaScript
                   </span>
                  <DiJavascript className='icon' />
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    PostgreSQL
                   </span>
                  <BiLogoPostgresql className='icon' />
                </div>
              </article>

              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    MongoDB
                   </span>
                  <SiMongodb className='icon' />
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    SQL Server
                   </span>
                  <SiMicrosoftsqlserver className='icon' />
                </div>
              </article>
               
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    Docker
                   </span>
                  <FaDocker className='icon' />
                </div>
              </article>
              
              <article className="experience__details">                
                <div className='skill_icon'>
                  <span className='title_skill'>
                    .NET Core
                   </span>
                  <SiDotnet className='icon' />
                </div>
              </article>

            </div>
              </section>
       
        </div> */}


      </div>

      <div className='time-line'>
        <TimeLine/>
      </div>
    </section>
    // estaria bueno agregar aca una seccion de herramientas que utilizo como Figma, LightHouse, FontsAwesome, Linux, GitHub, Git , Trello
  )
}

export default Experience