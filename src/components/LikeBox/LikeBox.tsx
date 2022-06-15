import React, {useEffect, useState} from 'react'
import './LikeBox.scss'
import { useDispatch, useSelector } from "react-redux"
import {bookmark} from '../../redux/reducer/NewPost'
import {like} from '../../redux/reducer/NewPost'
import {dislike} from '../../redux/reducer/NewPost'

import {LikeUp} from './LikeUp'
import {LikeDown} from './LikeDown'
import {Bookmark} from './Bookmark'
import {DotsThree} from './DotsThree'

type propsq = {
    id?: any
    bookmarkActive?: boolean
    likeActive?: boolean
    dislikeActive?: boolean
}

export const LikeBox = ({id, bookmarkActive,likeActive, dislikeActive}: propsq) => {
    const dataCards = useSelector((state: any) => state.data);
    const dispatch = useDispatch();

    // const [likeNumber, setLikeNumber] = useState(0)
    // const FunLikeNumber = (() => setLikeNumber(likeNumber + 1))  //временно отключена

    function bookmarkID() {
        dispatch(bookmark(id))
    }
    function likeID() {
        dispatch(like(id))
    }
    function dislikeID() {
        dispatch(dislike(id))
    }

    return <div className='like-box'>

        <div className='like-box__left'>
            <LikeUp active={likeActive} onClick={likeID}/>
            <LikeDown active={dislikeActive} onClick={dislikeID}/>
        </div>

        <div className='like-box__right'>
            <Bookmark active={bookmarkActive} onClick={bookmarkID}/>
            <DotsThree/>
        </div>        
        
    </div>
}
