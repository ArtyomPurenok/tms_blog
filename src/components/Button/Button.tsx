import React from 'react';
import './Button.scss';

type buttonProps = {
    className?: string  //btnClass
    onClick?: any  //functionLikeNumber
    Icon?: any //BtnIcon
    likeNumber?: number
    txt?: string  //btnTxt
}

export const Button = ({className, onClick, Icon, txt}: buttonProps) => {
    return <div>
        <button onClick={onClick} className={className}>

            {Icon && <Icon height='100%'/>}
            {txt}
            
        </button>
    </div>
}