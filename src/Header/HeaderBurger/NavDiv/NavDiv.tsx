import React from "react";
import './NavDiv.scss';

import {ButtonForNav} from '../../../components/Button/ButtonForNav';


export const NavDiv = () => {
    return <div>
        <ButtonForNav txt='LikeBox' route='/LikeBox'/>
        <ButtonForNav txt='Search' route='/search'/>
    </div>
}