import React from "react";
import './SignUpInputsBox.scss';

import {Input} from '../../../../components/Input'

export const SignUpInputsBox = () => {
    function form(event: any) {
        console.log("Вы ввели: " + event.target.value)
    }

    return <div className="signUp-inputs-box">
        <form action="">
        <Input name='Name' onChange={form} inputName='Name' generalDiv='signUp-inputs-box__name-div' className='signUp-inputs-box__input-name' placeholder='Your name'/>
        <Input name='Email' onChange={form} inputName='Email' generalDiv='signUp-inputs-box__email-div' className='signUp-inputs-box__input-email' placeholder='Your email'/>
        <Input name='Password' onChange={form} inputName='Password' generalDiv='signUp-inputs-box__password-div' className='signUp-inputs-box__input-password' placeholder='Your password' type='password'/>
        <Input name='Confirm password' onChange={form} inputName='Confirm password' generalDiv='signUp-inputs-box__confPassword-div' className='signUp-inputs-box__input-confPassword' placeholder='Confirm password' type='password'/>
        </form>
    </div>
}