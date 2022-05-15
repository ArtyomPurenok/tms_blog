import React from "react";
import './CardsAssembly.scss'

import {Card} from '../../../components/Card';
import {AstronautsTwoDataServer} from '../../AstronautsMainTwoPage';
import {LikeBox} from '../../../components/LikeBox';
import {LineButtom} from '../../../components/LineButtom';


export const arrBigCards = AstronautsTwoDataServer.slice(0, 6).map((el: any) => {
    return <div>
        <Card cardClass='astronaut-two-big-card' cardImg={el.img} cardData={el.date} cardTitle={el.title}/>
        <LikeBox/>
        <LineButtom/>
        </div>

})

export const arrSmallCard = AstronautsTwoDataServer.slice(6).map((el) => {
    return <div>
        <Card cardClass='astronaut-two-small-card' cardImg={el.img}/>
        <LikeBox/>
        </div>
})

