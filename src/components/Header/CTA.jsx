import React from 'react'
// import CV from '../../assets/CV.pdf'
import CV from '../../assets/cv/cv_dev.pdf'


const CTA = () => {
  return (
        <div className="cta">
            <a data-aos="fade-right" href={ CV }  target="_blank"  className='btn'>My resume here!</a>
            <a data-aos="fade-left" href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
    )
}

export default CTA
