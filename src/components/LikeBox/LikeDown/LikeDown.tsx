import React from 'react';
import './LikeDown.scss'

import {Button} from '../../Button'

import { ReactComponent as LikeDownIcon } from '../../Icons/LikeDownIcon.svg'

type Props = {
    onClick?: any
    active?: boolean
}

export const LikeDown = ({onClick, active}: Props) => {

    return <div>
        <Button Icon={LikeDownIcon} className={`likeDown likeDown__${active}`} onClick={onClick}/>
    </div>
}
