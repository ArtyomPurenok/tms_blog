import React from 'react';

type buttonProps = {
    BtnClass?: string
    FunctionLikeNumber?: any
    BtnIcon?: any
    likeNumber?: number
    BtnTxt?: string
}

export const Button = (({BtnClass, FunctionLikeNumber, BtnIcon, likeNumber, BtnTxt}: buttonProps) => {
    return <div>
        <button 
        onClick={FunctionLikeNumber}
        className={BtnClass}
        >
            {BtnTxt}
            {BtnIcon && <BtnIcon height='100%'/>}
            {likeNumber}
        </button>
    </div>
})