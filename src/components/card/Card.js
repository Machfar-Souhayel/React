import React from 'react'
import styles from './card.module.css'
import { AiOutlineHeart } from 'react-icons/ai';
import {IoIosBed} from 'react-icons/io'
import {FaToilet} from 'react-icons/fa'
function Card({data}) {
    return (
        <div className={styles.card}>
            <img src={data.imgSrc} alt="related to card" />
            <div className={styles.cardInfo}>
                <div>
                    <h1 className={styles.cap}>{data.title}</h1>
                    <div className={styles.cardIconContainer}>
                        <IoIosBed className={styles.customIconStyles}/>{data.area} |
                        <IoIosBed className={styles.customIconStyles}/>{data.roomNumber} |
                        <FaToilet className={styles.customIconStyles}/>{data.toiletNumber}
                    </div>
                </div>
                <AiOutlineHeart className={`
                    ${styles.customIconStyles} 
                    ${styles.customHeartStyles} 
                    ${data.liked ? styles.likedHeart : null}
                `}/>
            </div>
        </div>
    )
}

export default Card
