import React from "react";
import './AstronautsTwoSmallCards.scss';

import {arrSmallCard} from '../CardsAssembly';


export const AstronautsTwoSmallCards = (() => {
    return <div className="astronauts-two-small-cards">
        {arrSmallCard}
    </div>
})