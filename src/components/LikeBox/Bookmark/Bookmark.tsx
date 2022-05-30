import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Bookmark.scss';

import {Button} from '../../Button'

import { ReactComponent as BookmarkIcon } from '../../Icons/BookmarkIcon.svg'


type propsa = {
    id?: number
    onClick?: any
    active?: any
}

export const Bookmark = ({id, onClick, active}: propsa) => {
    const dataCards = useSelector((state: any) => state.value);


    return <div>
        <Button Icon={BookmarkIcon} className={`bookmark bookmark__${active}`} onClick={onClick}/>
    </div>
}
