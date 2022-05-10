import React from 'react';
import './Card.css'

type CardProps = {
    CardClass?: string
    CardImg?: string
    CardImgClass?: string
    CardData?: string
    CardTitle?: string
    CardArticle?: string
    CardTxtClass?: string
}

export const Card = (({CardImg, CardImgClass, CardData, CardTitle, CardArticle, CardClass, CardTxtClass}: CardProps) => {
    return <div className={CardClass}>

        <img className={CardImgClass} src={CardImg}/>

        <div className={CardTxtClass}>
            <p>{CardData}</p>
            <h1>{CardTitle}</h1>
            {CardArticle && <p>{CardArticle}</p>}
        </div>



    </div>
})