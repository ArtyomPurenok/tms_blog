import React from 'react';

type buttonProps = {
    BtnClass?: string
    functionLikeNumber?: any
    BtnIcon?: any
    likeNumber?: number
    BtnTxt?: string
}

export const Button = (({BtnClass, functionLikeNumber, BtnIcon, likeNumber, BtnTxt}: buttonProps) => {
    return <div>
        <button 
        onClick={functionLikeNumber}
        className={BtnClass}
        >
            {BtnTxt}
            {BtnIcon && <BtnIcon height='100%'/>}
            {likeNumber}
        </button>
    </div>
})