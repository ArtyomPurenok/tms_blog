import React, {useState} from 'react';
import './LikeBox.scss';
import { useDispatch, useSelector } from "react-redux";
import {stateBookmark} from '../../redux/reducer/PostServer';

import {LikeUp} from './LikeUp'
import {LikeDown} from './LikeDown'
import {Bookmark} from './Bookmark'
import {DotsThree} from './DotsThree'

type propsq = {
    id?: any
}

export const LikeBox = ({id}: propsq) => {
    const dispatch = useDispatch();
    const test = useSelector((state: any) => state.value);  //function test

    const [likeNumber, setLikeNumber] = useState(0)
    const FunLikeNumber = (() => setLikeNumber(likeNumber + 1))  //временно отключена

    const [styleBookmark, setStyleBookmark] = useState(0) //времменно не работает



    const stateBookmarkFunction = () => {
        // dispatch(stateBookmark(id))
        qwe()
        setTimeout(() => {dispatch(stateBookmark(id))}, 1000)
    }

    //test function
    const qwe = () => {
        console.log(styleBookmark)
        setStyleBookmark(styleBookmark+5)
    }
    
    return <div className='like-box'>

        <div className='like-box__left'>
            <LikeUp functionLikeNumber={qwe}  likeNumber={likeNumber}/>
            <LikeDown/>
        </div>

        <div className='like-box__right'>
            <Bookmark onClick={stateBookmarkFunction}/>
            <DotsThree/>
        </div>        
        
    </div>
}
