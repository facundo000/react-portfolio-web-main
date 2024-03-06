import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
//import Review from './components/Review/Review';//when have review
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import Loader from './components/Loader/Loader';

import	{ Helmet } from 'react-helmet';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [activeNav,setActiveNav] = useState('#');

  useEffect(() => {

    //Stop the loader after 0.5 secs
    setTimeout(()=> setIsLoading(false),500)
    
    //Initialize Animate on scroll
    AOS.init({
      duration: 800, 
      disable:function () {
        var maxWidth = 1024;
        return window.innerWidth < maxWidth;
      },
    });

    let section = document.querySelectorAll('section')
 

    window.addEventListener('scroll',() => {
      if(window.scrollY < 50){
        setActiveNav(`#`);
      }

      section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =  sec.getAttribute('id');
              
        if(top >= offset && top < offset + height){
              setActiveNav(`#${id}`);        
        }    
      })
   })
},[activeNav, isLoading]);

  return (
   isLoading ? <Loader/> : (
    <>
    {/* Header section  */}
    <Helmet>
      <title>Facundo Guzman Portfolio</title>
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://portfolio-facundo-guzman.netlify.app" />
      <meta name="description" content="Look at this wonderful Portfolio which shows the journey of an Argentine fascinated in the world of technology."/>

      {/* <!-- Facebook Meta Tags --/> */}
      <meta property="og:url" content="https://portfolio-facundo-guzman.netlify.app/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Facundo Guzman Portfolio"/>
      <meta property="og:description" content="Look at this wonderful Portfolio which shows the journey of an Argentine fascinated in the world of technology."/>
      <meta property="og:image" content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/portfolio-facundo-guzman.netlify.app/Facundo%20Guzman%20Portfolio/Look%20at%20this%20wonderful%20Portfolio%20which%20shows%20the%20journey%20of%20an%20Argentine%20fascinated%20in%20the%20world%20of%20technology./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Ffb6a08a3-8a7f-4d32-b03a-d3dec20303d8.jpg%3Ftoken%3Dcj8fFeyJyZxbzffFw5FIVbAT8knSaRPnnPk1W11RsAA%26height%3D537%26width%3D1200%26expires%3D33240807436/og.png"/>

      {/* <!-- Twitter Meta Tags --/> */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="portfolio-facundo-guzman.netlify.app"/>
      <meta property="twitter:url" content="https://portfolio-facundo-guzman.netlify.app/"/>
      <meta name="twitter:title" content="Facundo Guzman Portfolio"/>
      <meta name="twitter:description" content="Look at this wonderful Portfolio which shows the journey of an Argentine fascinated in the world of technology."/>
      <meta name="twitter:image" content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/portfolio-facundo-guzman.netlify.app/Facundo%20Guzman%20Portfolio/Look%20at%20this%20wonderful%20Portfolio%20which%20shows%20the%20journey%20of%20an%20Argentine%20fascinated%20in%20the%20world%20of%20technology./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Ffb6a08a3-8a7f-4d32-b03a-d3dec20303d8.jpg%3Ftoken%3Dcj8fFeyJyZxbzffFw5FIVbAT8knSaRPnnPk1W11RsAA%26height%3D537%26width%3D1200%26expires%3D33240807436/og.png"/>

      {/* <!-- Meta Tags Generated via https://opengraph.dev --> */}
     </Helmet>

      {/* Header section */}
      <Header/>
      {/* Nav section  */}
      <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>

      {/* About Section */}
      <About/>

      {/* Experience section */}
      <Experience/>

      {/* Services section  */}
      <Services /> 

      {/* Portfolio section  */}
      <Portfolio/>

      {/* References section  */}
      {/* <Review/> */}

      {/* Contact section  */}
      <Contact/>

      {/* Footer Section  */}
      <Footer/>

    </>
   )
  )
}

export default App
