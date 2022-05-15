import React, { useContext } from "react";
import './AstronautsTwoBigCards.scss';

import {arrBigCards} from '../CardsAssembly';

// // const BigCard = useContext(DataFromServer);


export const AstronautsTwoBigCards = (() => {

    return <div className="astronauts-two-big-cards">
        {arrBigCards}

    </div>
})