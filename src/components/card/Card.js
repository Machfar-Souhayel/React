import React from 'react'
import styles from './card.module.css'

function Card({imgSrc, cap}) {
    return (
        <div className={styles.card}>
            <img src={imgSrc} alt="related to card" />
            <div className={styles.cardInfo}>
                <h1 className={styles.cap}>{cap}</h1>
                <img  src="/images/Group 942.png" alt="done" />
            </div>
        </div>
    )
}

export default Card
