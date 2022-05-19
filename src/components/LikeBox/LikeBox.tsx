import React, {useState} from 'react';
import './LikeBox.scss'

import {LikeUp} from './LikeUp'
import {LikeDown} from './LikeDown'
import {Bookmark} from './Bookmark'
import {DotsThree} from './DotsThree'


export const LikeBox = (() => {
    const [likeNumber, setLikeNumber] = useState(0)

    const FunLikeNumber = (() => setLikeNumber(likeNumber + 1))


    return <div className='like-box'>

        <div className='like-box__left'>
            <LikeUp functionLikeNumber={FunLikeNumber}  likeNumber={likeNumber}/>
            <LikeDown/>
        </div>

        <div className='like-box__right'>
            <Bookmark/>
            <DotsThree/>
        </div>        
        
    </div>
})