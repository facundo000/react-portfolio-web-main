import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

import { useTranslation } from 'react-i18next';


const Portfolio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [t] = useTranslation("global");

  const projects = [ 
    {
      name: "3d prints",
      deployedLink: "https://3d-print-bootstrap.netlify.app/",
      GitName: "3d-prints",
      image: require('../../assets/projectsImg/impreciones-3d.webp'),
      fadeDuration:'1400',
      description: t("portfolio-item-description1") ,
      toolsUsed: ['HTML','CSS','Bootstrap']
    },
    {
      name : "Curriculum Web",
      deployedLink: "https://curriculum-vitae-fg.netlify.app/",
      GitName: "website-resume",
      image: require('../../assets/projectsImg/Captura-de-pantalla-_13_.webp'),
      fadeDuration:'1200',
      description:t("portfolio-item-description2"),
      toolsUsed: ['HTML','CSS', 'JavaScript', 'w3']
    },
    { 
      name : "Coffee Blog",
      GitName: "Blog_coffee",
      deployedLink: "https://sitiodcafe.netlify.app/",
      image: require('../../assets/projectsImg/Captura-de-pantalla-_7_.webp'),
      fadeDuration:'1000',
      description: t("portfolio-item-description3"),
      toolsUsed: ['HTML','CSS']
    
    },
    {
      name: "T-shirt Shop",
      GitName: "T-shirt-Shop",
      deployedLink: "https://tienda01.netlify.app/",
      image: require('../../assets/projectsImg/Captura-de-pantalla-2023-08-09-184937.webp'),
      description: t("portfolio-item-description4"),
      fadeDuration: "1100",
      toolsUsed: ['HTML','CSS']
    },
    {
      name:"Calculator",
      deployedLink: "https://facundo000.github.io/calculator/",
      GitName: "calculator",
      image: require('../../assets/projectsImg/Captura-de-pantalla-_12_.webp'),
      fadeDuration:'1300',
      description:t("portfolio-item-description5"),
      toolsUsed: ['HTML', 'Sass', 'TypeScript', 'Angular', 'Bootstrap']
    },
    {
      name: "Rick & Morty Api Rest",
      deployedLink: "https://rickmorty-api-rest.netlify.app/",
      GitName:"Api_Rest-Angular-RickAndMorty/tree/main/api-Rick-Morty",
      image: require('../../assets/projectsImg/Rick&Morty.webp'),
      fadeDuration:'1400',
      description:t("portfolio-item-description6"),
      toolsUsed: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'Lazy Loading', 'Api Rest', 'Bootstrap']
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
                  <img src={image} alt={`${name} app Screenshot`} />
              </div>
              <h3
              title={t("click-for-details")}
              className='portfolio__item-name'
               onClick={() => handleClick({name,image,deployedLink, GitName, toolsUsed, description})}
              >{name}</h3>

              <div className="portfolio__item-cta">
                <a className='btn' 
                  href={`https://github.com/facundo000/${GitName}`}
                  target='_blank'
                  rel="noreferrer"
                >GitHub</a>
                <a className='btn btn-primary' 
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
                >{t("portfolio-live-demo-link")}</a>
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

export default Portfolio