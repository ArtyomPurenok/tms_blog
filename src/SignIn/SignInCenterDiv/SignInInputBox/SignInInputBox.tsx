import React from "react";
import './SignInInputBox.css';

import {Input} from '../../../components/Input'

export const SignInInputBox = (() => {
    return <div className="signIn-input-box">
         <Input inputName='Email' inputPlaceholder='Your email' inputClass='signIn-input-email' inputGeneralDiv='signIn-input-email-div'/>
         <Input inputType='password' inputName='Password' inputPlaceholder='Your password' inputClass='signIn-input-password' inputGeneralDiv='signIn-input-password-div'/>
         <p className="signIn-input-box-forPas">Forgot password?</p>
    </div>
})
