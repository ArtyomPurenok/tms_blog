import React, {useState, useRef} from 'react';
import './InputForSignUp.css'

type SignUpInputProps = {
    SignUpInpClass: string,
    SignUpInputType: string,
    SignUpTxtNameForInput: string,
    SignUpInputPlaceholder: string,
    EmailVerification?: any,
    BorderColorEmailInput?: string,
    LoginVerification?: any,
    BorderColorUserInput?: any,
    PasswordInputOne?: any,
    PasswordInputTwo?: any,
    BorderColorInputPasswords?: any,
}

export const InputForSignUp = ({EmailVerification, LoginVerification, PasswordInputOne, PasswordInputTwo, BorderColorUserInput, SignUpInpClass, SignUpInputType, SignUpTxtNameForInput, SignUpInputPlaceholder, BorderColorEmailInput, BorderColorInputPasswords}: SignUpInputProps) => {
    // const [val, setValue] = useState('')
    // const asd = (el: any) => {
    //     setValue(el.target.value)  
    // }
    const inputRef = useRef<HTMLInputElement | null>(null)
    inputRef.current?.focus()



return <div className='SignUpInput'>
        <p>{SignUpTxtNameForInput}</p>
        <input ref={inputRef}  onChange={EmailVerification || LoginVerification || PasswordInputOne || PasswordInputTwo}    className={SignUpInpClass} style={{borderColor: BorderColorEmailInput || BorderColorUserInput || BorderColorInputPasswords}} type={SignUpInputType} placeholder={SignUpInputPlaceholder}/>

    </div>
}