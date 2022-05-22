import React from "react";
import './HeaderBurger.scss';

import {NavDiv} from './NavDiv';
import {FunctionDiv} from './FunctionDiv';

type HeaderBurgerProps = {
    typeDisplay?: string
}
export const HeaderBurger = ({typeDisplay}: HeaderBurgerProps) => {
    return <div className="header-burger" style={{display: typeDisplay}}>
        <div className="header-burger__nav-fun--divs">
            {/* <NavDiv/> */}
            <FunctionDiv/>
        </div>

    </div>
}