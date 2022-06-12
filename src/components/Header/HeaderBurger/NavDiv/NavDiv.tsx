import React, { useEffect, useState } from "react";
import './NavDiv.scss';

import {ButtonForNav} from '../../../Button/ButtonForNav';
import { ButtonUser } from "../../../Button/ButtonUser";
import { useSelector } from "react-redux";


export const NavDiv = () => {
    const [user, setUser] = useState('');
    const userData = useSelector((state: any) => state.tokens.user);


    useEffect(() => {
        if (userData.userName != null) {           
            setUser('ok')
        }else {setUser('')}
    }, [userData.userName])

    
    return <div>
        {user && <ButtonUser userName={userData.userName} className='nav-div__btn-user'/>}
        <ButtonForNav txt='Home' route='/main'/>
        <ButtonForNav txt='SignIn' route='/signIn'/>
        <ButtonForNav txt='SignUp' route='/signUp'/>
        <ButtonForNav txt='Verify' route='/verify'/>
        <ButtonForNav txt='Reset Password' route='/resetPassword'/>
        <ButtonForNav txt='New Password' route='/newPassword'/>
        <ButtonForNav txt='Add post' route='/newPassword'/>
    </div>
}