import React from "react";
import './NavDiv.scss';

import {ButtonForNav} from '../../../components/Button/ButtonForNav';


export const NavDiv = () => {
    return <div>
        <ButtonForNav txt='Home' route='/'/>
        <ButtonForNav txt='Two Main' route='/secondPage'/>
        <ButtonForNav txt='SignIn' route='/signIn'/>
    </div>
}