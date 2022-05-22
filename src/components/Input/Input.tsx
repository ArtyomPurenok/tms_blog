import React from 'react';
import './Input.scss'

type InputProps = {
    className?: string  //inputClass
    type?: string  //inputType
    placeholder?: string  //inputPlaceholder
    onChange?: any  //inputOnChange
    inputName?: string  //inputName
    generalDiv?: string  //inputGeneralDiv
    name?: string
}

export const Input = ({className, type, placeholder, onChange, inputName, generalDiv, name}: InputProps) => {

    return <div className={generalDiv}>
        {inputName && <p className='input__p'>{inputName}</p>}
        <input className={className} name={name} onChange={onChange} type={type} placeholder={placeholder}/>
    </div>
}
