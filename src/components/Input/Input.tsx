import React from 'react';
import './Input.css'

type InputProps = {
    inputClass?: string
    inputType?: string
    inputPlaceholder?: string
    inputOnChange?: any
    inputName?: string
    inputGeneralDiv?: string
}

export const Input = (({inputClass, inputType, inputPlaceholder, inputOnChange, inputName, inputGeneralDiv}: InputProps) => {

    return <div className={inputGeneralDiv}>
        {inputName && <p className='input-P'>{inputName}</p>}
        <input className={inputClass} onChange={inputOnChange} type={inputType} placeholder={inputPlaceholder}/>
    </div>
})