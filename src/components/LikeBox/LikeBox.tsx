import React, {useState} from 'react';
import './LikeBox.css'

import {LikeUp} from './LikeUp'
import {LikeDown} from './LikeDown'
import {Bookmark} from './Bookmark'
import {DotsThree} from './DotsThree'


export const LikeBox = (() => {
    const [likeNumber, setLikeNumber] = useState(0)

    const FunLikeNumber = (() => setLikeNumber(likeNumber + 1))


    return <div className='LikeBox'>

        <div className='LikeBoxLeft'>
            <LikeUp FunctionLikeNumber={FunLikeNumber}  likeNumber={likeNumber}/>
            <LikeDown/>
        </div>

        <div className='LikeBoxRight'>
            <Bookmark/>
            <DotsThree/>
        </div>        
        
    </div>
})