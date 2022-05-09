import React from "react";
import './SignInButtonBox.css'

import {Button} from '../../../components/Button'

export const SignInButtonBox = (() => {
    return <div className="SignInButtonBox">
        <Button BtnClass="SignInBtnLogin" BtnTxt='Sign In'/>
        <p className="SignInButtonBoxTxt">Don’t have an account? <span className="SignInButtonBoxSpan">Sign Up</span></p>
    </div>
})