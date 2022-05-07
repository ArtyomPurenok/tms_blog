import React from 'react'
import { getEventListeners } from 'events'
import { useState } from 'react'
import './Input.css'

interface IClassN {
    inpOne: string,
    inpTwo: string,
    inpThree: string,
    inpFour: string,
    inpFive: string,
}

type allElem={
    text: string,
    classGeneral: string,
    classNM: IClassN,
    block: boolean,
    classTitle: {
        titOne: string,
        titTwo: string,
    }
}

export const InputField = ({classNM, text, classGeneral, block, classTitle}: allElem) => {
const [value, setValue] = useState('');
const [error, setError] = useState('');


    const asd = (el: any) => {
        setValue(el.target.value)

    if(el.target.value.length < 3) {
        setError('Error')
        
    }else {
        setError('')
    }
}


    return (
    <div className={classGeneral}>
        
      <p><a className={classTitle.titOne}>{text}</a></p>
      <input className={classNM.inpOne} placeholder="Placeholder"></input>

      <p><a className={classTitle.titTwo}>{text}</a></p>
      <input className={classNM.inpTwo} placeholder="Placeholder"></input>

      <p><a className={classTitle.titTwo}>{text}</a></p>
      <input className={classNM.inpThree}></input>

      <p><a className={classTitle.titTwo}>{text}</a></p>
      <input disabled={block} className={classNM.inpFour} value="Text"></input>

      <p><a className={classTitle.titTwo}>{text}</a></p>
      <input type="text" value={value} className={classNM.inpFive} onChange={asd}></input>
      {error && <p className='error'>{error}</p>}
    </div>

    )
}
