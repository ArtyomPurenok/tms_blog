import React from 'react';
import './Card.scss'

type CardProps = {
    cardClass?: string
    cardImg?: string
    cardImgClass?: string
    cardData?: string
    cardTitle?: string
    cardArticle?: string
    cardTxtClass?: string
}

export const Card = ({cardImg, cardImgClass, cardData, cardTitle, cardArticle, cardClass, cardTxtClass}: CardProps) => {
    return <div className={cardClass}>

        <img className={cardImgClass} src={cardImg}/>

        <div className={cardTxtClass}>
            <p>{cardData}</p>
            <h1>{cardTitle}</h1>
            {cardArticle && <p>{cardArticle}</p>}
        </div>



    </div>
}
