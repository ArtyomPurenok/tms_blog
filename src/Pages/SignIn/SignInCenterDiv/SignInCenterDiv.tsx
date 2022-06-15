import React, { useEffect, useState } from "react"
import './SignInCenterDiv.scss'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import {PageTittle} from "../../../components/PageTittle"
import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { tokens } from "../../../thunkAction/Tokens"
import { customFetch } from "../../../thunkAction/CustomFeatch"
import { userFeatch } from "../../../thunkAction/UserFeatch"



export const SignInCenterDiv = () => {
    // const dataUser = useSelector((state: any) => state.user.asd);
    const dataTokens = useSelector((state: any) => state.tokens);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    } 
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    } 

    const sumbutForm = (event: any) => {
        event.preventDefault();
        const formData = {email,password};
   
        dispatch(tokens(formData))
        .then((data: any) => {dispatch(customFetch(data.payload))})
        .then( dispatch(userFeatch(dataTokens.tokens.access)))
      }



    //   useEffect(() => {      
    //       if (dataTokens.user.userName) {
    //           alert('Are you registered')
    //         navigate('/main')
    //       }
    //   }, [])


    return <div className="signIn-center-box">

        <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='Sign In'/>   

        <div className="signIn-center-div">
            <Input onChange={onEmailChange} inputName='Email' placeholder='Your email' className='signIn-center-div__input-email' generalDiv='signIn-center-div__email-div'/>
            <Input onChange={onPasswordChange} inputName='Password' type='password' placeholder='Your password' className='signIn-center-div__input-password' generalDiv='signIn-center-div__password-div'/>
            <p className="signIn-center-div__forPas">Forgot password?</p>

            <Button onClick={sumbutForm} className="signIn-center-div__btn-login" txt='Sign In'/>
            <p className="signIn-center-div__txt">Don’t have an account? <a href="signUp" className="signIn-center-div__span">Sign Up</a></p>
        </div>

    </div>
}