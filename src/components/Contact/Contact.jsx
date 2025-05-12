import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTranslation } from 'react-i18next';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('portfolio-website', 'template_wzhzmrl', form.current, 'WbzcfYh53mnbX0Hi5')
      .then((result) => {
          toast.success("Message sent to Facundo Guzman");
      }, (error) => {
          toast.error("Oops something went wrong");
      })

    e.target.reset();
  };
  const [t] = useTranslation("global");

  return (
    <section id='contact'>
      <h5 data-aos="fade-up" data-aos-anchor="#contact"  data-aos-duration='700'>{t("contact-title")}</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#contact"  data-aos-duration='900' className='text-light'>{t("contact-sub-title")}</h2>
      <ToastContainer/>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Email  */}
          <article className="contact__option" data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1600'>
            <a href="mailto:facundo.guzman@mi.unc.edu.ar" target='_blank'  rel="noreferrer">
            <MdOutlineEmail className='contact__option-icon'/></a>
            <h4>Email</h4>
            <a href="mailto:facundo.guzman@mi.unc.edu.ar" target='_blank'  rel="noreferrer">{t("contact-email-button")}</a>
          </article>

          {/* Linkedin  */}
          <article className="contact__option" data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1300'>
          <a href="https://www.linkedin.com/in/facundo-nicolas-guzman-olariaga-b4516021a/" target='_blank'  rel="noreferrer">
            <BsLinkedin className='contact__option-icon'/></a>
            <h4>Linkedin </h4>
            <h5>FACUNDO NICOLAS GUZMAN OLARIAGA</h5>
            <a href="https://www.linkedin.com/in/facundo-nicolas-guzman-olariaga-b4516021a/" target='_blank'  rel="noreferrer">{t("contact-linkedin-button")}</a>
          </article>

          {/* Instagram  */}
          <article className="contact__option" data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1000'>
            <a href="https://www.instagram.com/desarrollador_web_freelance/" target='_blank'  rel="noreferrer">
            <BsInstagram className='contact__option-icon'/>
            </a>
            <h4>Instagram</h4>
            <h5>@desarrollador_web_freelance</h5>
            <a href="https://www.instagram.com/desarrollador_web_freelance/" target='_blank'  rel="noreferrer">{t("contact-instagram-button")}</a>
          </article>

          
        </div>
        
        {/* END OF CONTACT OPTIONS  */}
        <div className='form'>
        <form ref={form} onSubmit={sendEmail} >
           <input type="text" name='name' placeholder={t("contact-form-full-name")} data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='800' required/>
           <input type="email" name='email' placeholder={t("contact-form-email")} data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='950' required/>
           <textarea name="message" style={{fontFamily: "Poppins" }} placeholder={t("contact-form-message-placeholder")} rows="7" data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1200' required></textarea>
           <button type='submit' className='btn btn-primary form__button' data-aos="fade-up" data-aos-anchor=".contact__container"  data-aos-duration='1400'>{t("contact-form-button")} <FaTelegramPlane className='send__message-icon'/></button>
        </form>
        </div>
      </div>
    </section >
  )
}

export default Contact