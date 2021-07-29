import React from 'react'
import styles from './expertiseList.module.css';

function ExpertiseList({data}) {
    return (
        <div className={styles.expertiseList}>
            <p>{data}</p>
            <div>
            <img src="/images/expertiseImages/Group 1905.png" alt="exp"/>
            <img src="/images/expertiseImages/Group 1904.png" alt="exp"/>
            <img src="/images/expertiseImages/Group 1903.png" alt="exp"/>
            <img src="/images/expertiseImages/Group 1902.png" alt="exp"/>
            <img src="/images/expertiseImages/Group 1901.png" alt="exp"/>
            <img src="/images/expertiseImages/Group 1900.png" alt="exp"/>
            <img src="/images/expertiseImages/Group 1899.png" alt="exp"/>
            </div>
        </div>
    )
}

export default ExpertiseList
