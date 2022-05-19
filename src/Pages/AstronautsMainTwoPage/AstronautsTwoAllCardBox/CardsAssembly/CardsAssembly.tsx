import React, {useContext} from "react";
import './CardsAssembly.scss'

import {Card} from '../../../../components/Card';
import {DataServer} from '../../AstronautsMainTwoPage';
import {LikeBox} from '../../../../components/LikeBox';
import {LineButtom} from '../../../../components/LineButtom';

const arrayDataServer = useContext(DataServer);

export const arrBigCards = arrayDataServer.slice(0, 6).map((el: any) => {

    return <div>
        <Card cardClass='astronaut-two-big-card' cardImg={el.img} cardData={el.date} cardTitle={el.title}/>
        <LikeBox/>
        <LineButtom/>
        </div>

})

export const arrSmallCards = arrayDataServer.slice(6).map((el) => {
    return <div>
        <Card cardClass='astronaut-two-small-card' cardImg={el.img}  cardData={el.date}  cardTitle={el.title}/>
        <LikeBox/>
        <LineButtom/>
        </div>
})

