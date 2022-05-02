import React, {useState} from 'react';
import './BoxWithInputs.css'
import {InputForSignUp} from '../Components/Input'
import {SignUpButton} from '../Components/Button'

export const BoxWithInputs = () => {

    //поле Login
    const [borderColorUserInput, setBorderColorUserInput] = useState('');

    const loginVerification = function(el: any) {
        if(el.target.value.length > 2) {
            setBorderColorUserInput("green")
        }else {
            setBorderColorUserInput("red")
        }
    }

    
    //поле Email
    const [borderColorEmailInput, setBorderColorEmailInput] = useState('');

    const emailVerification = function(el: any) {
        if (el.target.value.split('').includes('@') === true && el.target.value.split('').includes(' ') != true) {
            setBorderColorEmailInput("green")
        }else {
            setBorderColorEmailInput("red")
        }
        }
      

    //поля для поролей
    let arrPasswordOne: string[] = [];

    const passwordInputOne = (el: any) => {
        arrPasswordOne.pop();
        arrPasswordOne.push(el.target.value);
        passwordСhecking(arrPasswordOne[0], arrPasswordTwo[0]);
    }

    let arrPasswordTwo: string[] = [];

    const passwordInputTwo = (el: any) => {
        arrPasswordTwo.pop();
        arrPasswordTwo.push(el.target.value);
        passwordСhecking(arrPasswordOne[0], arrPasswordTwo[0]);
    }

    const [borderColorInputPasswords, setBorderColorInputPasswords] = useState('');

    function passwordСhecking(passwordOne: any, passwordTwo: any) {
        if (passwordOne === passwordTwo) {
            setBorderColorInputPasswords('green')
        }else {
            setBorderColorInputPasswords('red')
        }
    }







    return <div className='qwe'>
        <InputForSignUp
        SignUpTxtNameForInput = 'Name'
        SignUpInpClass = 'SignUpInputName'
        SignUpInputType = 'text'
        SignUpInputPlaceholder = 'Your Name'
        LoginVerification = {loginVerification}
        BorderColorUserInput = {borderColorUserInput}
        />

        <InputForSignUp
        SignUpTxtNameForInput = 'Email'
        SignUpInpClass = 'SignUpInputEmail'
        SignUpInputType = 'text'
        SignUpInputPlaceholder = 'Your email'
        EmailVerification = {emailVerification}
        BorderColorEmailInput = {borderColorEmailInput}
        />

        <InputForSignUp
        SignUpTxtNameForInput = 'Password'
        SignUpInpClass = 'SignUpInputPassword'
        SignUpInputType = 'password'
        SignUpInputPlaceholder = 'Your password'
        PasswordInputOne = {passwordInputOne}
        BorderColorInputPasswords = {borderColorInputPasswords}
        />

        <InputForSignUp
        SignUpTxtNameForInput = 'Confirm Password'
        SignUpInpClass = 'SignUpInputConfirmPass'
        SignUpInputType = 'password'
        SignUpInputPlaceholder = 'Confirm Password'
        PasswordInputTwo = {passwordInputTwo}
        BorderColorInputPasswords = {borderColorInputPasswords}
        />

        <SignUpButton/>

        <div className='SignUpBelowButton'><p>Already have an account? <span>Sign In</span></p></div>
    </div>
}