import React from 'react';
import './LikeDown.scss'

import {Button} from '../../Button'

import { ReactComponent as LikeDownIcon } from '../../Icons/LikeDownIcon.svg'



export const LikeDown = () => {

    return <div>
        <Button Icon={LikeDownIcon} className='likeDown__btn'/>
    </div>
}
