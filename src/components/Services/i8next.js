//esto es como componet/body
import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import './services.css'

export default function UseI8next() {
  const [t, i18n] = useTranslation("global");
  const [currentLang, setCurrentLang] = useState('es');
  return (
    <select value={currentLang} onChange={e => {i18n.changeLanguage(e.target.value); setCurrentLang(e.target.value);}} className='lang-btn'>
      <option value="es">ES </option>
      <option  value="en">EN</option>
      
    </select>    
    
  )
}
