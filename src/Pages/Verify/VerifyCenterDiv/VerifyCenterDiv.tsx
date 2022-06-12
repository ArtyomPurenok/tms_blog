import React, { useEffect, useState } from "react"
import './VerifyCenterDiv.scss'
import { useDispatch, useSelector } from "react-redux"

import {PageTittle} from "../../../components/PageTittle"
import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { verify } from "../../../thunkAction/VerifyFeatch";
import { useNavigate } from "react-router-dom"


export const VerifyCenterDiv = () => {
    
    const dataSignUp = useSelector((state: any) => state.verify);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [uid, setUid] = useState('')
    const [token, setToken] = useState('')

    const onUidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUid(event.target.value)
    } 
    const onTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value)
    } 

    useEffect(() => {
        if (dataSignUp.dataVerify == 'ok') {
            navigate('/')
        }
    }, [dataSignUp])

    const  verifyForm = (event: any) => {
        event.preventDefault()
        const verifyData = {uid, token}
        dispatch(verify(verifyData))
      }

    return <div className="verify-center-div">

        <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='Verify'/>   

        <div className="verify-center-div__inputs--btn">

            <form action="">
            <div className="verify-center-div__input-box">
                <Input onChange={onUidChange} inputName='uid' placeholder='uid' className='verify-center-div__input-uid' generalDiv='verify-center-div__uid-div'/>
                <Input onChange={onTokenChange} inputName='token' placeholder='token' className='verify-center-div__input-token' generalDiv='verify-center-div__token-div'/>
                <Button onClick={verifyForm} className="verify-center-div__btn" txt='Verify'/>
            </div>
            </form>

        </div>

    </div>
}