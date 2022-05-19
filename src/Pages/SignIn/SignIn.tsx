import React from "react";
import './SignIn.scss'

import {SignInCenterDiv} from './SignInCenterDiv'


import {Header} from '../../Header';
import {Footer} from '../../Footer';

export const SignIn = () => {
    return <div className="sign-in">

        <Header/>

        <SignInCenterDiv/>
        <Footer/>
        
    </div>
}