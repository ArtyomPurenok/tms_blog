import React from "react";
import './SignInButtonBox.scss'

import {Button} from '../../../components/Button'

export const SignInButtonBox = (() => {
    return <div className="signIn-btn-box">
        <Button BtnClass="signIn-btn-box__login" BtnTxt='Sign In'/>
        <p className="signIn-btn-box__txt">Don’t have an account? <span className="signIn-btn-box__span">Sign Up</span></p>
    </div>
})