import React from "react";
import './SignInInputBox.scss';

import {Input} from '../../../components/Input'

export const SignInInputBox = (() => {
    return <div className="signIn-input-box">
         <Input inputName='Email' inputPlaceholder='Your email' inputClass='signIn-input-box__input-email' inputGeneralDiv='signIn-input-box__email-div'/>
         <Input inputType='password' inputName='Password' inputPlaceholder='Your password' inputClass='signIn-input-box__input-password' inputGeneralDiv='signIn-input-box__password-div'/>
         <p className="signIn-input-box__forPas">Forgot password?</p>
    </div>
})
