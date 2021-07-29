import React from 'react'
import styles from './article.module.css'

function Article({data}) {
    return (
        <article className={styles.articleContainer}>
            <h1>{data.mainTitle}</h1>
            <h3>{data.secondTitle}</h3>
            <p>{data.header}</p>
                {
                    data?.expertise?.map((el, index) => { 
                        return <p key={index}>{el}</p>
                    })
                }
        </article>
    )
}

export default Article
