import React from "react";
import './HeaderBtn.scss';
import {Link} from 'react-router-dom';

type HeaderBtnProps = {
    onClick?: any
    txt: string
    route: string
}

export const HeaderBtn = ({onClick, txt, route}: HeaderBtnProps) => {
    return <div>
        <nav>
        <Link to={route}>
        <button className='header-btn' onClick={onClick}>

        {txt}     

        </button>
        </Link>
        </nav>
        </div>
}