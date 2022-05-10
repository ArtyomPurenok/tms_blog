import React from 'react';
import './Input.css'

type InputProps = {
    InputClass?: string
    InputType?: string
    InputPlaceholder?: string
    InputOnChange?: any
    InputName?: string
    InputGeneralDiv?: string
}

export const Input = (({InputClass, InputType, InputPlaceholder, InputOnChange, InputName, InputGeneralDiv}: InputProps) => {

    return <div className={InputGeneralDiv}>
        {InputName && <p className='input-P'>{InputName}</p>}
        <input className={InputClass} onChange={InputOnChange} type={InputType} placeholder={InputPlaceholder}/>
    </div>
})