import React from 'react';
import './LikeDown.css'

import {Button} from '../../Button'

import { ReactComponent as LikeDownIcon } from '../../Icons/LikeDownIcon.svg'



export const LikeDown = (() => {

    return <div>
        <Button BtnIcon={LikeDownIcon} btnClass='btn-likeDown'/>
    </div>
})