import React from "react";
import './SignIn.scss'

import {SignInCenterDiv} from './SignInCenterDiv'


import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

export const SignIn = () => {
    return <div className="sign-in">

        <Header/>

        <SignInCenterDiv/>
        <Footer/>
        
    </div>
}