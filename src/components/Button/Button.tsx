import React from 'react';
import './Button.scss';

type buttonProps = {
    btnClass?: string
    functionLikeNumber?: any
    BtnIcon?: any
    likeNumber?: number
    btnTxt?: string
    btnDivClass?: any
}

export const Button = (({btnClass, functionLikeNumber, BtnIcon, likeNumber, btnTxt, btnDivClass}: buttonProps) => {
    return <div className={btnDivClass}>
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