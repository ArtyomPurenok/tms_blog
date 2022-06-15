import React, { useState } from "react"
import './ResetPasswordPage.scss'
import { useNavigate } from "react-router-dom"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { PageTittle } from "../../components/PageTittle"
import {ResetPasswordFetch} from '../../thunkAction/ResetPasswordFetch'






export const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    } 

    const sendingData = (event: any) => {
        event.preventDefault();
        const formData = {email};
        ResetPasswordFetch(formData)
        .then((data) => {
            if (data == 'ok') {
                navigate('/newPassword')
            }
        })

    }

    return <div className="reset-password">

            <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='Reset Password'/>   

            <div className="reset-password-center-div">

                <Input onChange={onEmailChange} inputName='Email' placeholder='Your email' className='reset-password-center-div__input' generalDiv='reset-password-center-div__input-div'/>
                <Button onClick={sendingData} className="reset-password-center-div__btn" txt='Reset'/>
               
            </div>

    </div>
}