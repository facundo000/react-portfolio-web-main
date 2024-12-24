import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

import { useTranslation } from 'react-i18next';

import { CardDescription, Card } from 'keep-react'

// import { CarouselComponent } from './Carousel'

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

              <CardDescription style={{color: 'white'}}>
              {description}
              <br />
                  {toolsUsed.map((tool, index) => (
                    <span key={index}>{tool}{index < toolsUsed.length - 1 ? ', ' : ''}</span>
                  ))}
              </CardDescription>

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

export default Portfolio