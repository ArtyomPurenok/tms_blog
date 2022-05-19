import React from 'react';
import './LikeDown.scss'

import {Button} from '../../Button'

import { ReactComponent as LikeDownIcon } from '../../Icons/LikeDownIcon.svg'



export const LikeDown = () => {

    return <div>
        <Button BtnIcon={LikeDownIcon} btnClass='likeDown__btn'/>
    </div>
}