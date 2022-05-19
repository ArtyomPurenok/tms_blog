import React from "react";
import './SignIn.scss'

import {SignInCenterDiv} from './SignInCenterDiv'
import {PageTittle} from "../PageTittle";

import {Header} from '../Header'
import {Footer} from '../Footer'

export const SignIn = () => {
    return <div className="sign-in">

        <Header/>
        <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='Sign In'/>
        <SignInCenterDiv/>
        <Footer/>
        
    </div>
}