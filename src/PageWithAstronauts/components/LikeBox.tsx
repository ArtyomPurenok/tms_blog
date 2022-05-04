import { type } from '@testing-library/user-event/dist/type';
import React, {useState, useEffect} from 'react';
import './LikeBox.css'

import { ReactComponent as LikeUpIcon } from './icons/LikeUpIcon.svg'
import { ReactComponent as LikeDownIcon } from './icons/LikeDownIcon.svg'
import { ReactComponent as BookmarkIcon } from './icons/BookmarkIcon.svg'
import { ReactComponent as ThreeDotsIcon } from './icons/ThreeDotsIcon.svg'





export const LikePanel = (() => {
    const [counter, setCounter] = useState(0)

    const asd = (() => setCounter(counter + 1))
    
    return (
    <div className='likeBoxGeneral'>
        <div className='likeBoxLeft'>
            <button onClick={asd}><LikeUpIcon height='100%'/>{' ' + counter}</button>
            <button><LikeDownIcon height='100%'/></button>  
        </div>


        <div className='likeBoxRight'>
            <button><BookmarkIcon width='70%' height='100%'/></button>
            <button><ThreeDotsIcon width='100%' height='100%'/></button>  
        </div>
    </div>
)})