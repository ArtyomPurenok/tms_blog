import React from "react";
import './BoxWithAstronautsCards.css'

import {AstronautsCenterPosts} from './AstronautsCenterPosts';
import {AstronautsLittlePosts} from './AstronautsLittlePosts';

type IBoxWithAstronautsCardsProps = {
    dataServer: any
}

export const BoxWithAstronautsCards = (({dataServer}: IBoxWithAstronautsCardsProps) => {
    return <div className="root-box-astr-cards">
            <AstronautsCenterPosts dataServer={dataServer}/>
            <AstronautsLittlePosts dataServer={dataServer}/>
    </div>
})