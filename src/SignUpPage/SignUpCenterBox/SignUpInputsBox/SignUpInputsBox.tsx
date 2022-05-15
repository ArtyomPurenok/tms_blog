import React from "react";
import './SignUpInputsBox.scss';

import {Input} from '../../../components/Input'

export const SignUpInputsBox = (() => {
    return <div className="signUp-inputs-box">
        <Input inputName='Name' inputGeneralDiv='signUp-inputs-box__name-div' inputClass='signUp-inputs-box__input-name' inputPlaceholder='Your name'/>
        <Input inputName='Email' inputGeneralDiv='signUp-inputs-box__email-div' inputClass='signUp-inputs-box__input-email' inputPlaceholder='Your email'/>
        <Input inputName='Password' inputGeneralDiv='signUp-inputs-box__password-div' inputClass='signUp-inputs-box__input-password' inputPlaceholder='Your password' inputType='password'/>
        <Input inputName='Confirm password' inputGeneralDiv='signUp-inputs-box__confPassword-div' inputClass='signUp-inputs-box__input-confPassword' inputPlaceholder='Confirm password' inputType='password'/>
    </div>
})