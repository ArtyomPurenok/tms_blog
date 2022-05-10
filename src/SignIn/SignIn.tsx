import React from "react";
import './SignIn.css'

// import {Button} from '../components/Button'

import {SignInCenterDiv} from './SignInCenterDiv'

import {Header} from '../Header'
import {Footer} from '../Footer'

export const SignIn = (() => {
    return <div className="signIn">

        <Header/>
        <div className="signIn-Div-Txt">
            <p className="signIn-ComeHome">Back to home</p>
            <h1 className="signIn-Title">Sign In</h1>
        </div>
        <SignInCenterDiv/>
        <Footer/>
        
    </div>
})