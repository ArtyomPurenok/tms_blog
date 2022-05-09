import React from "react";
import './SignInInputBox.css';

import {Input} from '../../../components/Input'

export const SignInInputBox = (() => {
    return <div className="SignInInputBox">
         <Input InputName='Email' InputPlaceholder='Your email' InputClass='signInInputEmail' InputGeneralDiv='signInInputEmailDiv'/>
         <Input InputType='password' InputName='Password' InputPlaceholder='Your password' InputClass='signInInpuPassword' InputGeneralDiv='signInInputPasswordDiv'/>
         <p className="SignInInputBoxForPas">Forgot password?</p>
    </div>
})
