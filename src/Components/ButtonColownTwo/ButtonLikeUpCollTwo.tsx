import React, { useState } from 'react'
import './allComponentsCollTwo.css'

export const ButtonLikeUpCollTwo = ({img}: any) => {
    const [name, setName] = useState(0)

    
    return <button className='ButtonlikeUpCollTwo'><img className='ImglikeUpCollTwo' src={img} onClick={() => setName(name + 1)}/>{name}</button>
}