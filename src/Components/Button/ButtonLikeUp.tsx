import React, { useState } from 'react'
import './allComponents.css'

export const ButtonLikeUp = ({img}: any) => {
    const [name, setName] = useState(0)

    
    return <button className='ButtonlikeUp'><img className='ImglikeUp' src={img} onClick={() => setName(name + 1)}/>{name}</button>
}