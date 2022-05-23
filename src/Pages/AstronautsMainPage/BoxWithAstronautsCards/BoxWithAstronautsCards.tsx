import React from "react";
import './BoxWithAstronautsCards.scss'

import {AstronautsCenterPosts} from './AstronautsCenterPosts';
import {AstronautsLittlePosts} from './AstronautsLittlePosts';
import {PageTittle} from '../../../components/PageTittle';
import {NavPanel} from '../../../components/NavPanel';

type IBoxWithAstronautsCardsProps = {
    dataServer: any
}



export const BoxWithAstronautsCards = ({dataServer}: IBoxWithAstronautsCardsProps) => {

    const Content = () => {
        return <div className="box-with-astronauts-cards">
                <AstronautsCenterPosts dataServer={dataServer}/>
                <AstronautsLittlePosts dataServer={dataServer}/>
            </div>
    }



    return <div className="box-with-astronauts-cards-general-div">

        <PageTittle pageTitleTxt='Blog' pageTitleGeneralDiv='astronauts-main-page__tittle'/>
        <NavPanel Content={Content}/>




    </div>
}