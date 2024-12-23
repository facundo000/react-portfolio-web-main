import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
// import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
//import Review from './components/Review/Review';//when have review
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import Loader from './components/Loader/Loader';
import Particles from './components/Particles/Particlesbg';

// import	{ Helmet } from 'react-helmet';

const App = () => {  

  //google  analytics
  const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-YGX7V43BHW`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-YGX7V43BHW');


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
      <Header/>
      {/* Nav section  */}
      <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>

      {/* About Section */}
      <About/>

      {/* Experience section */}
      <Experience/>

      {/* Services section  */}
      {/* <Services />  */}

      {/* Portfolio section  */}
      <Portfolio/>

      {/* References section  */}
      {/* <Review/> */}

      {/* Contact section  */}
      <Contact/>

      {/* Footer Section  */}
      <Footer/>
      
      <Particles/>
    </>
   )
  )
}

export default App
