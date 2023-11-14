import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='700'>The things i can do for you</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='900'>My Services</h2>
      
      <div className="container services__container">
        
        <article className="service" data-aos="fade-up" data-aos-anchor=".services__container"  data-aos-duration="1200">

          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Designing and building websites and web applications using best practices.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Developing responsive, mobile-friendly websites that work on various devices.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Continuous maintenance and updates.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Integrating websites and applications with databases and APIs.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Setting up hosting environments.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Performance optimization.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Providing assistance to website users and clients.</p>
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
                 <p>Creative collaboration.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>Ability to research and learn new technologies.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Maintain clear and constant communication with customers.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Take an iterative development approach.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Offer competitive and flexible rates.</p>
              </li>
              
            </ul>
          </article>

          {/* In the team  */}

          <article className="service" data-aos="fade-right" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
            <h3>In the team</h3>
          </div>

          <ul className="service__list">
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Use agile methodologies such as Scrum.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Use of project management tools.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Collaborative development.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Maintain constant communication between team members through meetings.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
               <p>Maintain an open mind and willing to learn from other team members.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
               <p>Create and maintain clear and up-to-date documentation on the project.</p>
             </li>
          </ul>
        </article>

        {/* END OF UI/UX */}


      </div>
    </section>
  )
}

export default Services