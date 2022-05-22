import React from 'react';
import './Bookmark.scss'

import {Button} from '../../Button'

import { ReactComponent as BookmarkIcon } from '../../Icons/BookmarkIcon.svg'

type propsa = {
    id?: number
    onClick: any
}

export const Bookmark = ({id, onClick}: propsa) => {

    return <div>
        <Button Icon={BookmarkIcon} txt={id} className='bookmark__btn' onClick={onClick}/>
    </div>
}
