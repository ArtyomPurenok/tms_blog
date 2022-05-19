import React from 'react';
import './Bookmark.scss'

import {Button} from '../../Button'

import { ReactComponent as BookmarkIcon } from '../../Icons/BookmarkIcon.svg'



export const Bookmark = () => {

    return <div>
        <Button BtnIcon={BookmarkIcon} btnClass='bookmark__btn'/>
    </div>
}