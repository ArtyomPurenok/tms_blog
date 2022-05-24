import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Bookmark.scss';

import {Button} from '../../Button'

import { ReactComponent as BookmarkIcon } from '../../Icons/BookmarkIcon.svg'


type propsa = {
    id?: number
    onClick: any
}

export const Bookmark = ({id, onClick}: propsa) => {
    const dataCards = useSelector((state: any) => state.value);

    const [styleBookmark, setStyleBookmark] = useState(0)
    // if (dataCards)


    return <div>
        <Button Icon={BookmarkIcon} className='bookmark__btn' onClick={onClick}/>
    </div>
}
