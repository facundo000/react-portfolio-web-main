import React ,{ useState } from 'react'
import styles from './terminal.module.css'
import { useTranslation } from 'react-i18next';

const Terminal = () => {    
    // const [showMessage, setShowMessage] = useState(false);
    const [t] = useTranslation("global");

    return (
        <div className={styles.content}>
            <div className={styles.container_con}>
        <div className={styles.container_terminal}></div>
        <div className={styles.terminal_toolbar}>
            <div className={styles.butt}>
            <button className={styles.btn + ' ' + styles.btn_color}></button>
            <button className={styles.btn}></button>
            <button className={styles.btn}></button>
            </div>
            <p className={styles.user}>facundo@admin: ~</p>
        </div>
        <div className={styles.terminal_body}>
            <div className={styles.terminal_promt}>
            <span className={styles.terminal_user}>facundo@admin:</span>
            <span className={styles.terminal_location}>~</span>
            <span className={styles.terminal_bling}>$
            </span>
            <span className={styles.terminal_cursor}></span>
            </div>
            <p className={styles.about_description} dangerouslySetInnerHTML={{ __html: t("about-description") }}/>
        </div>
        </div>
        </div>
    )
}

export default Terminal