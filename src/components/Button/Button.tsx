import React from 'react';
import './Button.scss';

type buttonProps = {
    btnClass?: string
    functionLikeNumber?: any
    BtnIcon?: any
    likeNumber?: number
    btnTxt?: string
}

export const Button = ({btnClass, functionLikeNumber, BtnIcon, likeNumber, btnTxt}: buttonProps) => {
    return <div>
        <button 
        onClick={functionLikeNumber}
        className={btnClass}
        // {btnLink && <></>}
        >
            {btnTxt}
            {BtnIcon && <BtnIcon height='100%'/>}
            {likeNumber}
        </button>
    </div>
}