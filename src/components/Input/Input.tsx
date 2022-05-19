import React from 'react';
import './Input.scss'

type InputProps = {
    inputClass?: string
    inputType?: string
    inputPlaceholder?: string
    inputOnChange?: any
    inputName?: string
    inputGeneralDiv?: string
    name?: string
    value?: string
}

export const Input = (({inputClass, inputType, inputPlaceholder, inputOnChange, inputName, inputGeneralDiv, name, value}: InputProps) => {

    return <div className={inputGeneralDiv}>
        {inputName && <p className='input__p'>{inputName}</p>}
        <input value={value} className={inputClass} onChange={inputOnChange} type={inputType} placeholder={inputPlaceholder} name={name}/>
    </div>
})