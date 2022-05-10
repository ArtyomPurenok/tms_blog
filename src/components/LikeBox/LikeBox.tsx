import React, {useState} from 'react';
import './LikeBox.css'

import {LikeUp} from './LikeUp'
import {LikeDown} from './LikeDown'
import {Bookmark} from './Bookmark'
import {DotsThree} from './DotsThree'


export const LikeBox = (() => {
    const [likeNumber, setLikeNumber] = useState(0)

    const FunLikeNumber = (() => setLikeNumber(likeNumber + 1))


    return <div className='like-Box'>

        <div className='like-Box-Left'>
            <LikeUp functionLikeNumber={FunLikeNumber}  likeNumber={likeNumber}/>
            <LikeDown/>
        </div>

        <div className='like-Box-Right'>
            <Bookmark/>
            <DotsThree/>
        </div>        
        
    </div>
})