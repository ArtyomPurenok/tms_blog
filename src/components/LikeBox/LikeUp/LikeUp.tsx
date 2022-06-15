import React, { useState } from 'react';
import './LikeUp.scss'

import {Button} from '../../Button'

import { ReactComponent as LikeUpIcon } from '../../Icons/LikeUpIcon.svg'

type LikeUpProps = {
    likeNumber?: number
    onClick?: any
    active?: boolean
}

export const LikeUp = ({onClick, likeNumber, active}: LikeUpProps) => {

    return <div>
        <Button onClick={onClick} Icon={LikeUpIcon} txt={likeNumber} className={`likeUp likeUp__${active}`}/>
    </div>
}
