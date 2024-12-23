import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

import { useTranslation } from 'react-i18next';

import { CarouselComponent } from './CarouselComponent';

const Portfolio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [t] = useTranslation("global");

  const projects = [ 
    { 
      name : "NEKODE",
      GitName: "/facundo000/NEKODE_FG",
      deployedLink: "https://nekode.vercel.app/",
      image: require('../../assets/projectsImg/nekode.webp'),
      fadeDuration:'1000',
      description: t("portfolio-item-description5"),
      toolsUsed: ['Nest js','TypeOrm', 'TypeScript' ,'JWT', 'PostgreSQL', 'RESTful']
    },

    { 
      name : "TechZone",
      GitName: "No-Country/C15-03-M-NodeReact",
      deployedLink: "https://techzone-nocountry.vercel.app/",
      image: require('../../assets/projectsImg/techzone.webp'),
      fadeDuration:'1000',
      description: t("portfolio-item-description1"),
      toolsUsed: ['Node js','Express js', 'JWT', 'PostgreSQL', 'RESTful']
    
    },
    { 
      name : "Incubadora del N.O.C",
      GitName: "fernandojbcba/santex_grupo30",
      deployedLink: "https://academy-e13ca.web.app/home/landing/",
      image: require('../../assets/projectsImg/xacademy.webp'),
      fadeDuration:'1000',
      description: t("portfolio-item-description4"),
      toolsUsed: ['Angular', 'Angular Material', 'JWT']
    },
    {
      name: "Rick & Morty Api Rest",
      deployedLink: "https://rickmorty-api-rest.netlify.app/",
      GitName:"facundo000/Api_Rest-Angular-RickAndMorty/tree/main/api-Rick-Morty",
      image: require('../../assets/projectsImg/rickandmorty.webp'),
      fadeDuration:'1400',
      description:t("portfolio-item-description2"),
      toolsUsed: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'Lazy Loading', 'Api Rest', 'Bootstrap']
    },
    { 
      name : "Coffee Blog",
      GitName: "facundo000/Blog_coffee",
      deployedLink: "https://sitiodcafe.netlify.app/",
      image: require('../../assets/projectsImg/coffee-blog.webp'),
      fadeDuration:'1000',
      description: t("portfolio-item-description3"),
      toolsUsed: ['HTML','CSS']
    
    }
    
  ]

  const handleClick = project => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id='portfolio'>
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='700'>{t("portfolio-favorite-part")} </h5>
        <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>{t("portfolio-title")}</h2>

        <div className="container portfolio__container">

         { 
          projects.map( ({name,image,deployedLink,description,toolsUsed, fadeDuration, GitName}) => (
          <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration={fadeDuration}
          >
              <div className="portfolio__item-image">
                  <img src={image} alt={`${name} app Screenshot`} loading="lazy" />
              </div>
              {/* <h3
              title={t("click-for-details")}
              className='portfolio__item-name'
               onClick={() => handleClick({name,image,deployedLink, GitName, toolsUsed, description})}
              >
                {name}
              </h3> */}
              <button 
              title={t("click-for-details")}
              className='portfolio__item-name'
              onClick={() => handleClick({name,image,deployedLink, GitName, toolsUsed, description})}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                {name}
              </button>
              <div className="portfolio__item-cta">
                <a className='btn gh' 
                  href={`https://github.com/${GitName}`}
                  target='_blank'
                  rel="noreferrer"
                >GitHub</a>
                <a className='btn btn-primary' 
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
                >{t("portfolio-live-demo-link")}
                </a>

              </div>
          </article>
           ))
         }

        </div>

         {isModalOpen && (<Modal
           closeModal={handleClick}
           project={selectedProject}
         />)}
    </section>
  
)
}
/* From Uiverse.io by bhaveshxrawat */ 
  {/* <div class="card">
      <h2>CARD</h2>
  </div> */}
export default Portfolio