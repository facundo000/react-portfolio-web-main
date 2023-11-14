import React, { useState } from 'react'
import './about.scss'
import { FaThumbsUp, FaTelegramPlane } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsClipboardCheck } from 'react-icons/bs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Brand Svg icons
import {
  faNode,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faAngular,
  faSass
} from '@fortawesome/free-brands-svg-icons';



const About = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section id='about'>
      <h5
      data-aos="fade-up" 
      data-aos-anchor="#about"  
      data-aos-duration='900'
      onMouseEnter={() => setShowMessage(true)}
      onMouseLeave={() => setShowMessage(false)}

      > {showMessage ? "My secret: I always work while drinking mate 😃" : "Ok, let's Go"}</h5>
      
      <h2 data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='700'>About me</h2>

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
              <FontAwesomeIcon icon={faSass} color="#ff0479" />
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

        <div className="about__content">
          <div className="about__cards">
            
            {/* Trusted Developer */}
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="500">
                <FaThumbsUp className='about__icon'/>
                <h5 style={{ paddingbottom: "1rem" }}>Trusted Developer</h5>
                <ul>
                  <li>Responsibility</li>
                  <li>Good practices </li>
                </ul>
            </article>

            {/* Services */}
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="700">
                <FiUsers className='about__icon'/>
                <h5>Services</h5>
                <ul>
                  <li>Freelance </li>
                  <li>Collaborations </li>
                  <li>Looking for a company </li>
                </ul>
            </article>

            {/* Technologies  */}
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="900">
                <BsClipboardCheck className='about__icon'/>
                <h5>Technologies</h5>
                <small>15+ Web Development Stack</small>
            </article>
          </div>

           <p  data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1000">
           Hello hello! My full name is Facundo Nicolas Guzmán Olariaga, for friends I am Nico and Facu for family, for work I am a faithful apprentice and especially in full stack web development, with a strong motivation to create exceptional digital experiences. <br />
           I love everything related to technology, but not as much as my <span className='Boca' >❤Boca</span><span className='jr'> jr ❤</span> FOOTBALL team.
              <br />
              I am ready and willing to face new challenges and learn from each experience. Both my results-oriented approach and my ability to work in a team allow me to face projects with creativity and efficiency.
           </p>

           <a href='#contact' className='btn btn-primary' data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1200">Let's chat <FaTelegramPlane/></a>
        </div>
      </div>
    </section>
  )
}

export default About