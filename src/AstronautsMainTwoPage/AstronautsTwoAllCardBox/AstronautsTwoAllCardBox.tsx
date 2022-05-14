import React from "react";
import './AstronautsTwoAllCardBox.scss';

import {AstronautsTwoBigCards} from './AstronautsTwoBigCards'


type BigCardType = {
    arrBigCard: any
}

export const AstronautsTwoAllCardBox = (() => {
    return <div>
        <AstronautsTwoBigCards/>
    </div>
})