import React from "react";
import './SignInButtonBox.css'

import {Button} from '../../../components/Button'

export const SignInButtonBox = (() => {
    return <div className="signIn-btn-box">
        <Button BtnClass="signIn-btn-login" BtnTxt='Sign In'/>
        <p className="signIn-btn-box-txt">Don’t have an account? <span className="signIn-btn-box-span">Sign Up</span></p>
    </div>
})