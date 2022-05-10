import React from "react";
import './SignInInputBox.css';

import {Input} from '../../../components/Input'

export const SignInInputBox = (() => {
    return <div className="signIn-Input-Box">
         <Input inputName='Email' inputPlaceholder='Your email' inputClass='signIn-Input-Email' inputGeneralDiv='signIn-Input-Email-Div'/>
         <Input inputType='password' inputName='Password' inputPlaceholder='Your password' inputClass='signIn-Input-Password' inputGeneralDiv='signIn-Input-Password-Div'/>
         <p className="signIn-Input-Box-ForPas">Forgot password?</p>
    </div>
})
