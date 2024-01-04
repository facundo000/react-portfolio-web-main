//esto es como componet/body
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function UseI8next() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      {/* <h5>{t("header.greeting")}</h5>
      <h5>{t("header.title")}</h5>
      <br/><br/> */}
      <button onClick={() => i18n.changeLanguage("es")}>  ES  </button>
      <button onClick={() => i18n.changeLanguage("en")}>  EN  </button>
    </div>
  )
}
