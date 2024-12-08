import React from 'react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

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

  const CardSpotlightEffect = () => {
  
    const [t] = useTranslation("global");
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
  
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
  
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    

    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900 px-8 py-16 shadow-2xl"           
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,254,201,.06), transparent 40%)`,
        }}
      />
      <div className="experence__backend" data-aos="fade-left" data-aos-anchor=".experience__container"  data-aos-duration="1200">
           <h3 className="rol" >{t("tech-skills")}</h3>
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
                <div className='skill_icon'>
                  <span className='title_skill'>
                    HTML
                   </span>
                  <FaHtml5 className='icon' style={{ margin: 0}} />
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
    </div>
  );
};

export default CardSpotlightEffect
