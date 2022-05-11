import React from "react";
import './SignUpButtonBox.css';

import {Button} from '../../../components/Button'

export const SignUpButtonBox = (() => {
    return <div className="signUp-btn-box">
        <Button btnClass="signUp-btn" btnTxt='Sign Up'/>
        <p className="signUp-btn-box-txt">Already have an account? <span className="signUp-btn-box-span">Sign In</span></p>
    </div>
})