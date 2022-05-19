import React from "react";
import './SignInInputBox.scss';

import {Input} from '../../../../components/Input';

export const SignInInputBox = () => {
    return <div className="signIn-input-box">
         <Input inputName='Email' placeholder='Your email' className='signIn-input-box__input-email' generalDiv='signIn-input-box__email-div'/>
         <Input type='password' inputName='Password' placeholder='Your password' className='signIn-input-box__input-password' generalDiv='signIn-input-box__password-div'/>
         <p className="signIn-input-box__forPas">Forgot password?</p>
    </div>
}
