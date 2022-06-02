import React from "react";
import './NavDiv.scss';

import {ButtonForNav} from '../../../Button/ButtonForNav';


export const NavDiv = () => {
    return <div>
        <ButtonForNav txt='Home' route='/'/>
        <ButtonForNav txt='Two Main' route='/secondPage'/>
        <ButtonForNav txt='SignIn' route='/signIn'/>
        <ButtonForNav txt='SignUp' route='/signUp'/>
        <ButtonForNav txt='Verify' route='/verify'/>
    </div>
}