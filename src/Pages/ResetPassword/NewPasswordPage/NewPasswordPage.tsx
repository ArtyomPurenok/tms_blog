import React, { useState } from "react"
import './NewPasswordPage.scss'
import { useNavigate } from "react-router-dom"

import { PageTittle } from "../../../components/PageTittle"
import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { NewPasswordFetch } from "../../../thunkAction/NewPasswordFetch"


export const NewPasswordPage = () => {
    const navigate = useNavigate();
    
    const [uid, setUid] = useState('');
    const [token, setToken] = useState('');
    const [new_password, setNewPassword] = useState('');

    const onUidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUid(event.target.value)
    } 
    const onTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value)
    } 
    const onNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value)
    } 

    const SetNewPassword = (event: any) => {
        event.preventDefault();
        const formData = {uid, token, new_password};
        NewPasswordFetch(formData)
        .then((data) => {
            if (data == 'ok') {
                alert('You changed your password')
                navigate('/main')
            }
        })
    }

    return <div className="new-password">

            <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='New Password'/>   

            <div className="new-password-center-div">

                <Input onChange={onUidChange} inputName='Uid' placeholder='Your uid' className='new-password-center-div__input' generalDiv='new-password-center-div__input-div'/>
                <Input onChange={onTokenChange} inputName='Token' placeholder='Your token' className='new-password-center-div__input' generalDiv='new-password-center-div__input-div'/>
                <Input onChange={onNewPasswordChange} inputName='New Password' placeholder='Your New Password' className='new-password-center-div__input' generalDiv='new-password-center-div__input-div'/>
                <Button onClick={SetNewPassword} className="new-password-center-div__btn" txt='Set password'/>
               
            </div>

    </div>
}