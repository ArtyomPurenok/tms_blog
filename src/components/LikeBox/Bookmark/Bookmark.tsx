import React from 'react';
import './Bookmark.css'

import {Button} from '../../Button'

import { ReactComponent as BookmarkIcon } from '../../Icons/BookmarkIcon.svg'



export const Bookmark = (() => {

    return <div>
        <Button BtnIcon={BookmarkIcon} btnClass='btn-bookmark'/>
    </div>
})