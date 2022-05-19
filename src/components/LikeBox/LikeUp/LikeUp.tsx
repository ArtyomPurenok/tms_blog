import React, { useState } from 'react';
import './LikeUp.scss'

import {Button} from '../../Button'

import { ReactComponent as LikeUpIcon } from '../../Icons/LikeUpIcon.svg'

type LikeUpProps = {
    functionLikeNumber?: any
    likeNumber: number
}

export const LikeUp = ({functionLikeNumber, likeNumber}: LikeUpProps) => {

    return <div>
        <Button onClick={functionLikeNumber} Icon={LikeUpIcon} likeNumber={likeNumber} className='likeUp__btn'/>
    </div>
}