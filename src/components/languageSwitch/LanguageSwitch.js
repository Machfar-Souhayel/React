import React, { useState } from 'react'
import styles from './languageSwitch.module.css'

function LanguageSwitch({onChange}) {
    const [languageToggle, setLanguageToggle] = useState(true)
    
    const toggleLanguageMethod = (event) => {
       
        if(event.target.innerText.toUpperCase() === 'FR' && languageToggle === false)
        { 
            setLanguageToggle(true)
            onChange('FR')
        }
        else if(event.target.innerText.toUpperCase() === 'EN' && languageToggle === true)
        {
            setLanguageToggle(false)
            onChange('EN')
        }
       
    }
    return (
        <div className={styles.languageContainer}>
            <button className={languageToggle === false ? styles.lanIsSelected : styles.lanIsNotSelected} 
                onClick={(e) => {
                        toggleLanguageMethod(e)
                    }
                }>EN
            </button>
            <button className={languageToggle === true ? styles.lanIsSelected : styles.lanIsNotSelected} 
                onClick={(e) => {
                        toggleLanguageMethod(e)
                    }
                }>FR
            </button>
        </div>
    )
}

export default LanguageSwitch