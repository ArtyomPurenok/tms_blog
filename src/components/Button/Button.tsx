import React from 'react';
import './Button.scss';

type buttonProps = {
    className?: string  //btnClass
    onClick?: any  //functionLikeNumber
    Icon?: any //BtnIcon
    txt?: string | number  //btnTxt
    divClass?: string
}

export const Button = ({className, onClick, Icon, txt, divClass}: buttonProps) => {
    return <div className={divClass}>

        <button onClick={onClick} className={className}>

            {Icon && <Icon height='100%'/>}
            {txt}
            
        </button>

    </div>
}
