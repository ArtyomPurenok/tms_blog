import React from "react";
import './SignUpInputsBox.scss';

import {Input} from '../../../../components/Input'

export const SignUpInputsBox = () => {
    function form(event: any) {
        console.log("Вы ввели: " + event.target.value)
    }

    return <div className="signUp-inputs-box">
        <form action="">
        <Input name='Name' inputOnChange={form} inputName='Name' inputGeneralDiv='signUp-inputs-box__name-div' inputClass='signUp-inputs-box__input-name' inputPlaceholder='Your name'/>
        <Input name='Email' inputOnChange={form} inputName='Email' inputGeneralDiv='signUp-inputs-box__email-div' inputClass='signUp-inputs-box__input-email' inputPlaceholder='Your email'/>
        <Input name='Password' inputOnChange={form} inputName='Password' inputGeneralDiv='signUp-inputs-box__password-div' inputClass='signUp-inputs-box__input-password' inputPlaceholder='Your password' inputType='password'/>
        <Input name='Confirm password' inputOnChange={form} inputName='Confirm password' inputGeneralDiv='signUp-inputs-box__confPassword-div' inputClass='signUp-inputs-box__input-confPassword' inputPlaceholder='Confirm password' inputType='password'/>
        </form>
    </div>
}