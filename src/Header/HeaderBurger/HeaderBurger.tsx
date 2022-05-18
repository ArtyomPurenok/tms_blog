import React from "react";
import './HeaderBurger.scss';

import {HeaderBurgerBtn} from './HeaderBurgerBtn';

type HeaderBurgerProps = {
    typeDisplay?: string
}
export const HeaderBurger = ({typeDisplay}: HeaderBurgerProps) => {
    return <div className="header-burger" style={{display: typeDisplay}}>
        <HeaderBurgerBtn/>
    </div>
}