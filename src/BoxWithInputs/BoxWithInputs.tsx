import React from 'react';
import './BoxWithInputs.css'
import {InputForSignUp} from '../Components/Input'
import {SignUpButton} from '../Components/Button'

export const BoxWithInputs = () => {
    return <div className='qwe'>
        <InputForSignUp
        SignUpTxtNameForInput = 'Name'
        SignUpInpClass = 'SignUpInputName'
        SignUpInputType = 'name'
        SignUpInputPlaceholder = 'Your Name'
        />

        <InputForSignUp
        SignUpTxtNameForInput = 'Email'
        SignUpInpClass = 'SignUpInputEmail'
        SignUpInputType = 'name'
        SignUpInputPlaceholder = 'Your email'
        />

        <InputForSignUp
        SignUpTxtNameForInput = 'Password'
        SignUpInpClass = 'SignUpInputPassword'
        SignUpInputType = 'password'
        SignUpInputPlaceholder = 'Your password'
        />

        <InputForSignUp
        SignUpTxtNameForInput = 'Confirm Password'
        SignUpInpClass = 'SignUpInputConfirmPass'
        SignUpInputType = 'password'
        SignUpInputPlaceholder = 'Confirm Password'
        />

        <SignUpButton/>

        <div className='SignUpBelowButton'><p>Already have an account? <span>Sign In</span></p></div>
    </div>
}