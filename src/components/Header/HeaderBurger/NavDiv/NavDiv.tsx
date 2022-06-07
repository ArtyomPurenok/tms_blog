import React, { useEffect, useState } from "react";
import './NavDiv.scss';

import {ButtonForNav} from '../../../Button/ButtonForNav';
import { ButtonUser } from "../../../Button/ButtonUser";
import { useSelector } from "react-redux";


export const NavDiv = () => {
    const [user, setUser] = useState('');
    const dataSignIn = useSelector((state: any) => state.signIn);


    useEffect(() => {
        if (dataSignIn.userName != null) {           
            setUser('ok')
        }else {setUser('')}
    }, [dataSignIn.userName])

    
    return <div>
        {user && <ButtonUser userName={dataSignIn.userName} className='nav-div__btn-user'/>}
        <ButtonForNav txt='Home' route='/'/>
        <ButtonForNav txt='Two Main' route='/secondPage'/>
        <ButtonForNav txt='SignIn' route='/signIn'/>
        <ButtonForNav txt='SignUp' route='/signUp'/>
        <ButtonForNav txt='Verify' route='/verify'/>
    </div>
}