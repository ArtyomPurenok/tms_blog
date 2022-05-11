import React from "react";
import './SignUpCenterBox.css';

import {SignUpInputsBox} from './SignUpInputsBox'
import {SignUpButtonBox} from './SignUpButtonBox'

export const SignUpCenterBox = (() => {
    return <div className="signUp-center-box">
        <SignUpInputsBox/>
        <SignUpButtonBox/>
    </div>
})