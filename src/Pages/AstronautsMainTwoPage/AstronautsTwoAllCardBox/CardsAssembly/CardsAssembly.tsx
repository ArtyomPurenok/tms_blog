import React, {useContext} from "react";
import './CardsAssembly.scss'

import {Card} from '../../../../components/Card';
import {DataServer} from '../../AstronautsMainTwoPage';
import {LikeBox} from '../../../../components/LikeBox';
import {LineButtom} from '../../../../components/LineButtom';




export const ArrBigCards = () => {
    const ArrayDataServer = useContext(DataServer);

    const ArrBigCards: any = ArrayDataServer.slice(0, 6).map((el: any) => {
        return <div>
        <Card cardClass='astronaut-two-big-card' cardImg={el.img} cardData={el.date} cardTitle={el.title}/>
        <LikeBox/>
        <LineButtom/>
        </div>
    })

    return ArrBigCards
}



export const ArrSmallCards = () => {
    const ArrayDataServer = useContext(DataServer);

    const ArrSmallCards: any = ArrayDataServer.slice(6).map((el: any) => {
        return <div>
        <Card cardClass='astronaut-two-small-card' cardImg={el.img}  cardData={el.date}  cardTitle={el.title}/>
        <LikeBox/>
        <LineButtom/>
        </div>
    })
    return ArrSmallCards
}


