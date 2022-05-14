import React, { useContext } from "react";
import './AstronautsTwoBigCards.scss';

import {arrBigCard} from '../CardsAssembly'
// // const BigCard = useContext(DataFromServer);


export const AstronautsTwoBigCards = (() => {

    return <div>
        {arrBigCard}
    </div>
})