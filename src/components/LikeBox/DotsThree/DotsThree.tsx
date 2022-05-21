import React from 'react';
import './DotsThree.scss'

import {Button} from '../../Button'

import { ReactComponent as DotsThreeIcon } from '../../Icons/ThreeDotsIcon.svg'



export const DotsThree = () => {

    return <div>
        <Button Icon={DotsThreeIcon} className='dotsThree__btn'/>
    </div>
}
