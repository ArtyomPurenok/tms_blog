import React from "react";
import './BoxWithAstronautsCards.scss'

import {AstronautsCenterPosts} from './AstronautsCenterPosts';
import {AstronautsLittlePosts} from './AstronautsLittlePosts';

type IBoxWithAstronautsCardsProps = {
    dataServer: any
}

export const BoxWithAstronautsCards = (({dataServer}: IBoxWithAstronautsCardsProps) => {
    return <div className="box-with-astronauts-cards">
            <AstronautsCenterPosts dataServer={dataServer}/>
            <AstronautsLittlePosts dataServer={dataServer}/>
    </div>
})