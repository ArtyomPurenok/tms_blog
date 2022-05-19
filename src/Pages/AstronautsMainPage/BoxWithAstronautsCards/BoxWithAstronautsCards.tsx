import React from "react";
import './BoxWithAstronautsCards.scss'

import {AstronautsCenterPosts} from './AstronautsCenterPosts';
import {AstronautsLittlePosts} from './AstronautsLittlePosts';
import {PageTittle} from '../../../components/PageTittle';

type IBoxWithAstronautsCardsProps = {
    dataServer: any
}

export const BoxWithAstronautsCards = ({dataServer}: IBoxWithAstronautsCardsProps) => {
    return <div className="asd">
        <PageTittle pageTitleTxt='Blog' pageTitleGeneralDiv='astronauts-main-page__tittle'/>
        <div className="box-with-astronauts-cards">
            <AstronautsCenterPosts dataServer={dataServer}/>
            <AstronautsLittlePosts dataServer={dataServer}/>
        </div>


    </div>
}