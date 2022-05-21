import React from 'react';
import './Input.scss'

type InputProps = {
    className?: string  //inputClass
    type?: string  //inputType
    placeholder?: string  //inputPlaceholder
    onChange?: any  //inputOnChange
    inputName?: string  //inputName
    generalDiv?: string  //inputGeneralDiv
}

export const Input = ({className, type, placeholder, onChange, inputName, generalDiv}: InputProps) => {

    return <div className={generalDiv}>
        {inputName && <p className='input__p'>{inputName}</p>}
        <input className={className} onChange={onChange} type={type} placeholder={placeholder}/>
    </div>
}
