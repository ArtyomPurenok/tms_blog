import React from 'react';

type buttonProps = {
    BtnClass?: string
    FunctionLikeNumber?: any
    BtnIcon?: any
    likeNumber?: number
}

export const Button = (({BtnClass, FunctionLikeNumber, BtnIcon, likeNumber}: buttonProps) => {
    return <div>
        <button 
        onClick={FunctionLikeNumber}
        className={BtnClass}
        >

            {BtnIcon && <BtnIcon height='100%'/>}
            {likeNumber}
        </button>
    </div>
})