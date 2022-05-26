import React, { useState } from 'react';
import './LikeUp.scss'

import {Button} from '../../Button'

import { ReactComponent as LikeUpIcon } from '../../Icons/LikeUpIcon.svg'

type LikeUpProps = {
    likeNumber: number
    onClick?: any
}

export const LikeUp = ({onClick, likeNumber}: LikeUpProps) => {

    return <div>
        <Button onClick={onClick} Icon={LikeUpIcon} txt={likeNumber} className='likeUp__btn'/>
    </div>
}
