import React from "react";
import './CardsAssembly.scss'

import {Card} from '../../../components/Card';
import {AstronautsTwoDataServer} from '../../AstronautsMainTwoPage';

console.log(AstronautsTwoDataServer);

export const arrBigCard = AstronautsTwoDataServer.slice(0, 6).map((el: any) => {
    return <Card cardClass='astronaut-two-big-card' cardImg={el.img} cardData={el.date} cardTitle={el.title}/>
})

export const arrSmollCard = AstronautsTwoDataServer.slice(6).map((el) => {
    return <Card cardClass='astronaut-two-smoll-card' cardImg={el.img}/>
})

