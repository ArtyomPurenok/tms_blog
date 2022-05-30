import React, {useState} from 'react';
import './LikeBox.scss';
import { useDispatch, useSelector } from "react-redux";
import {stateBookmark} from '../../redux/reducer/NOActivePostServer';

import {LikeUp} from './LikeUp'
import {LikeDown} from './LikeDown'
import {Bookmark} from './Bookmark'
import {DotsThree} from './DotsThree'

type propsq = {
    id?: any
    bookmarkStyle?: any
}

export const LikeBox = ({id, bookmarkStyle}: propsq) => {

    // const [likeNumber, setLikeNumber] = useState(0)
    // const FunLikeNumber = (() => setLikeNumber(likeNumber + 1))  //временно отключена



    return <div className='like-box'>

        <div className='like-box__left'>
            <LikeUp/>
            <LikeDown/>
        </div>

        <div className='like-box__right'>
            <Bookmark active={bookmarkStyle}/>
            <DotsThree/>
        </div>        
        
    </div>
}
