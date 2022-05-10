import React from "react";
import './SignInButtonBox.css'

import {Button} from '../../../components/Button'

export const SignInButtonBox = (() => {
    return <div className="signIn-Button-Box">
        <Button BtnClass="signIn-Btn-Login" BtnTxt='Sign In'/>
        <p className="signIn-Button-Box-Txt">Don’t have an account? <span className="signIn-Button-Box-Span">Sign Up</span></p>
    </div>
})