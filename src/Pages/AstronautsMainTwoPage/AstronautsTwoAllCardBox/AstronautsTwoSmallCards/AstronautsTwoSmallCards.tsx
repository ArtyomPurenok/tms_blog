import React from "react";
import './AstronautsTwoSmallCards.scss';

import {arrSmallCards} from '../CardsAssembly';


export const AstronautsTwoSmallCards = () => {
    return <div className="astronauts-two-small-cards">
        {arrSmallCards}
    </div>
}