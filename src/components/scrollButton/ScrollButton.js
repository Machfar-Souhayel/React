import React from 'react'
import styles from './scrollButton.module.css'

function ScrollButton({data}) {
    return (
        <a href="#footer" className={styles.scrollButton}>
            {data} 
        </a>
        
    )
}

export default ScrollButton
