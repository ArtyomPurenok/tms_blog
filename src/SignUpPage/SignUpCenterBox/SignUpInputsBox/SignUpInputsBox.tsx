import React from "react";
import './SignUpInputsBox.css';

import {Input} from '../../../components/Input'

export const SignUpInputsBox = (() => {
    return <div className="signUp-inputs-box">
        <Input inputName='Name' inputGeneralDiv='signUp-input-name-div' inputClass='signUp-input-name' inputPlaceholder='Your name'/>
        <Input inputName='Email' inputGeneralDiv='signUp-input-email-div' inputClass='signUp-input-email' inputPlaceholder='Your email'/>
        <Input inputName='Password' inputGeneralDiv='signUp-input-password-div' inputClass='signUp-input-password' inputPlaceholder='Your password' inputType='password'/>
        <Input inputName='Confirm password' inputGeneralDiv='signUp-input-confPassword-div' inputClass='signUp-input-confPassword' inputPlaceholder='Confirm password' inputType='password'/>
    </div>
})