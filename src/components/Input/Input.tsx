import React from 'react';
import './Input.css'

type InputProps = {
    InputClass?: string
    InputType?: string
    InputPlaceholder?: string
    InputOnChange?: any
}

export const Input = (({InputClass, InputType, InputPlaceholder, InputOnChange}: InputProps) => {

    return <div>
        <input className={InputClass} onChange={InputOnChange} type={InputType} placeholder={InputPlaceholder}/>
    </div>
})