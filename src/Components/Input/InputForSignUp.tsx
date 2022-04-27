import React from 'react';
import './InputForSignUp.css'

type SignUpInputProps = {
    SignUpInpClass: string,
    SignUpInputType: string,
    SignUpTxtNameForInput: string,
    SignUpInputPlaceholder: string,
}

export const InputForSignUp = ({SignUpInpClass, SignUpInputType, SignUpTxtNameForInput, SignUpInputPlaceholder}: SignUpInputProps) => {
    return <div className='SignUpInput'>
        <p>{SignUpTxtNameForInput}</p>
        <input className={SignUpInpClass} type={SignUpInputType} placeholder={SignUpInputPlaceholder} />

    </div>
}