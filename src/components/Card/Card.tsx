import React from 'react';
import './Card.css'

type CardProps = {
    CardClass?: string
    CardImg?: string
    CardData?: string
    CardTitle?: string
    CardArticle?: string
}

export const Card = (({CardImg, CardData, CardTitle, CardArticle, CardClass}: CardProps) => {
    return <div className={CardClass}>

        <div>{CardImg}</div>

        <div>
            <p>{CardData}</p>
            <h1>{CardTitle}</h1>
            {CardArticle && <p>{CardArticle}</p>}
        </div>



    </div>
})