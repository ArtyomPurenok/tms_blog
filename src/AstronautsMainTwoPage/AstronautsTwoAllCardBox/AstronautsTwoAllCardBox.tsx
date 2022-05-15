import React from "react";
import './AstronautsTwoAllCardBox.scss';

import {AstronautsTwoBigCards} from './AstronautsTwoBigCards';
import {AstronautsTwoSmallCards} from './AstronautsTwoSmallCards';


export const AstronautsTwoAllCardBox = (() => {
    return <div className="astronauts-two-all-card-box">
        <AstronautsTwoBigCards/>
        <AstronautsTwoSmallCards/>
    </div>
})