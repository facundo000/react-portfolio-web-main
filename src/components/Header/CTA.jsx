import React from 'react'
// import CV from '../../assets/CV.pdf'
import CV from '../../assets/cv/cv_dev.pdf'

import { useTranslation } from 'react-i18next';

const CTA = () => {
    const [t] = useTranslation("global");
  return (
        <div className="cta">
            <a data-aos="fade-right" href={ CV }  target="_blank"  className='btn'>{t("btn-resume")}</a>
            <a data-aos="fade-left" href="#contact" className='btn btn-primary'>{t("btn-connect")}</a>
        </div>
    )
}

export default CTA
