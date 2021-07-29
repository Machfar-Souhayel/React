import React from 'react'
import styles from './ratedCard.module.css';

function RatedCard({data}) {
    return (
      <div className={styles.RatedCard}>
        <div>
          <h1>Gilles D. (Ixelles)</h1>  
          <h2>&#9733; &#9733; &#9733; &#9733; &#9733;</h2>
        </div>
        <div>
          <p>{data}</p>
          <div>
            <img src="/icons/rightArrow.png" alt="arrow pointing to the right"/>
            <img src="/icons/leftArrow.png" alt="arrow pointing to the left"/>
          </div>
        </div>
        
      </div>
    )
}

export default RatedCard
