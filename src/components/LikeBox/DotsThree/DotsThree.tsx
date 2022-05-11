import React from 'react';
import './DotsThree.css'

import {Button} from '../../Button'

import { ReactComponent as DotsThreeIcon } from '../../Icons/ThreeDotsIcon.svg'



export const DotsThree = (() => {

    return <div>
        <Button BtnIcon={DotsThreeIcon} btnClass='btn-dotsThree'/>
    </div>
})