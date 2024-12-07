// import { FiUsers } from 'react-icons/fi';
// import { BsClipboardCheck } from 'react-icons/bs';
import React, { useState } from 'react'
import './about.scss'
import { FaThumbsUp, FaTelegramPlane } from 'react-icons/fa';
import  Terminal from './Terminal/terminal.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

// Brand Svg icons
import {
  faNode,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faAngular,
  faCss3Alt
} from '@fortawesome/free-brands-svg-icons';


const About = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [t] = useTranslation("global");

  return (
    <section id='about'>
      <h5
      data-aos="fade-up" 
      data-aos-anchor="#about"  
      data-aos-duration='900'
      onMouseEnter={() => setShowMessage(true)}
      onMouseLeave={() => setShowMessage(false)}

      > {showMessage ? t("about-secret-message") : t("about-secret-message-alt")}</h5>
      
      <h2 data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='700'>{t("about-title")}</h2>

      <div className="container about__container">
      <div className="stage-cube-cont" data-aos="fade-right" data-aos-anchor=".about__container"  data-aos-duration="500">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3Alt} color="#ff0479" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAngular} color="#ff0000" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        <div className="about__content"  data-aos="fade-up" data-aos-anchor=".about__content" data-aos-duration="1000">
          
          
          <Terminal/>

          {/* <p  data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: t("about-description") }}/> */}

           <a href='#contact' className='btn btn-primary' data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1200">{t("btn-lets-chat") }<FaTelegramPlane/></a>
        </div>
      </div>
    </section>
  )
}

export default About