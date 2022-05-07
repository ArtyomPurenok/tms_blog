import React, { useState } from 'react';
import './LikeUp.css'

import {Button} from '../../Button'

import { ReactComponent as LikeUpIcon } from '../../Icons/LikeUpIcon.svg'

type LikeUpProps = {
    FunctionLikeNumber?: any
    likeNumber: number
}

export const LikeUp = (({FunctionLikeNumber, likeNumber}: LikeUpProps) => {

    return <div>
        <Button FunctionLikeNumber={FunctionLikeNumber} BtnIcon={LikeUpIcon} likeNumber={likeNumber}/>
    </div>
})