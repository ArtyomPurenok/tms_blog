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
        <Button functionLikeNumber={functionLikeNumber} BtnIcon={LikeUpIcon} likeNumber={likeNumber} btnClass='likeUp__btn'/>
    </div>
}