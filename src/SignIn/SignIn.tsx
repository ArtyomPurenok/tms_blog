import React from "react";
import './SignIn.css'

// import {Button} from '../components/Button'

import {SignInCenterDiv} from './SignInCenterDiv'

import {Header} from '../Header'
import {Footer} from '../Footer'

export const SignIn = (() => {
    return <div className="SignIn">

        <Header/>
        <div className="SignInDivTxt">
            <p className="SignInComeHome">Back to home</p>
            <h1 className="SignInTitle">Sign In</h1>
        </div>
        <SignInCenterDiv/>
        <Footer/>
        
    </div>
})