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
    const test = useSelector((state: any) => state.posts.value);

    const [likeNumber, setLikeNumber] = useState(0)
    const FunLikeNumber = (() => setLikeNumber(likeNumber + 1))
    
    const dispatch = useDispatch();
    const click = () => {
        dispatch(stateBookmark(id))
        console.log(test);
        
    }


    //test function
    const qwe = () => {
        console.table(test)
    }
    
    return <div className='like-box'>

        <div className='like-box__left'>
            <LikeUp functionLikeNumber={qwe}  likeNumber={likeNumber}/>
            <LikeDown/>
        </div>

        <div className='like-box__right'>
            <Bookmark id={id} onClick={click}/>
            <DotsThree/>
        </div>        
        
    </div>
}
