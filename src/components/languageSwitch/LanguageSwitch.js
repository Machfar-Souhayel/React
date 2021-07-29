import React, { useState } from 'react'
import styles from './languageSwitch.module.css'

function LanguageSwitch(props) {
    const [languageToggle, setLanguageToggle] = useState(true)
    
    const toggleLanguageMethod = (event) => {
        if(event.target.innerText.toUpperCase() === 'FR' && languageToggle === false)
            setLanguageToggle(true)
        else if(event.target.innerText.toUpperCase() === 'EN' && languageToggle === true)
            setLanguageToggle(false)
        console.log(languageToggle)
    }
    return (
        <div className={styles.languageContainer}>
            <button className={languageToggle === false ? styles.lanIsSelected : styles.lanIsNotSelected} 
                onClick={(e) => {
                        toggleLanguageMethod(e)
                        props.onChange(languageToggle ? 'FR' : 'EN')
                    }
                }>EN
            </button>
            <button className={languageToggle === true ? styles.lanIsSelected : styles.lanIsNotSelected} 
                onClick={(e) => {
                        toggleLanguageMethod(e)
                        props.onChange(languageToggle ? 'FR' : 'EN')
                    }
                }>FR
            </button>
        </div>
    )
}

export default LanguageSwitch
