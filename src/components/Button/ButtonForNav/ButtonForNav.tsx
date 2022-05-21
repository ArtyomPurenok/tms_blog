import React from "react";
import './ButtonForNav.scss';
import {Link} from 'react-router-dom';

type BtnNavProps = {
    onClick?: any
    txt: string
    route: string
}

export const ButtonForNav = ({onClick, txt, route}: BtnNavProps) => {
    return <div>
        <nav>
        <Link to={route}>
        <button className='button-for-nav' onClick={onClick}>

        {txt}     

        </button>
        </Link>
        </nav>
        </div>
}