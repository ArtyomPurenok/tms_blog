import React from 'react';

type buttonProps = {
    btnClass?: string
    functionLikeNumber?: any
    BtnIcon?: any
    likeNumber?: number
    btnTxt?: string
}

export const Button = (({btnClass, functionLikeNumber, BtnIcon, likeNumber, btnTxt}: buttonProps) => {
    return <div>
        <button 
        onClick={functionLikeNumber}
        className={btnClass}
        >
            {btnTxt}
            {BtnIcon && <BtnIcon height='100%'/>}
            {likeNumber}
        </button>
    </div>
})