import React, { useContext } from "react";
import './AstronautsTwoBigCards.scss';

import {arrBigCards} from '../CardsAssembly';


export const AstronautsTwoBigCards = () => {

    return <div className="astronauts-two-big-cards">
        {arrBigCards}

    </div>
}