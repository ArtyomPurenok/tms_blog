import React, { useEffect, useState } from "react";
import './SignUpCenterBox.scss';
import { useDispatch, useSelector } from "react-redux";

import {PageTittle} from "../../../components/PageTittle";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { signUp } from "../../../thunkAction/SignUp";
import { useNavigate } from "react-router-dom";


export const SignUpCenterBox = () => {
    const dataSignUp = useSelector((state: any) => state.signUp);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    } 
    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    }  
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    }
    const onConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value)
    }

    useEffect(() => {
        if (dataSignUp.dataSignUp != null) {
            navigate('/verify')
        }
    })


    const sumbutForm = (event: any) => {
        event.preventDefault()
        const formData = {username, email, password}
        dispatch(signUp(formData))
      }


    
    return <div className="signUp-center-box-general-div">

            <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='Sign Up' pageTitleGeneralDiv='signUp__page-tittle'/>

            <div className="signUp-center-box">

                <form action="">
                <div className="signUp-center-box__inputs">
                        <Input onChange={onNameChange} name='Name' inputName='Name' generalDiv='signUp-center-box__name-div' className='signUp-center-box__input-name' placeholder='Your name'/>
                        <Input onChange={onEmailChange} name='Email' inputName='Email' generalDiv='signUp-center-box__email-div' className='signUp-center-box__input-email' placeholder='Your email'/>
                        <Input onChange={onPasswordChange} name='Password' inputName='Password' generalDiv='signUp-center-box__password-div' className='signUp-center-box__input-password' placeholder='Your password' type='password'/>
                        <Input onChange={onConfirmPasswordChange} name='Confirm password' inputName='Confirm password' generalDiv='signUp-center-box__confPassword-div' className='signUp-center-box__input-confPassword' placeholder='Confirm password' type='password'/>
                </div>

                <div className="signUp-center-box__btn--box">
                    <Button onClick={sumbutForm} className="signUp-center-box__btn" txt='Sign Up'/>
                    <p className="signUp-center-box__btn--txt">Already have an account? <a href="/signIn" className="signUp-center-box__btn--span">Sign In</a></p>
                </div>
                </form>

            </div>

    </div>
}