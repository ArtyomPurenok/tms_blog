import React from "react";
import './AstronautsTwoAllCardBox.scss';

import {AstronautsTwoBigCards} from './AstronautsTwoBigCards';
import {AstronautsTwoSmallCards} from './AstronautsTwoSmallCards';
import {PageTittle} from '../../../components/PageTittle';


export const AstronautsTwoAllCardBox = () => {
    return <div className="astronauts-two-all-card-general-div">
        <PageTittle pageTitleTxt='Blog' pageTitleGeneralDiv='astronauts-main-two-page__page-tittle'/>

        <div className="astronauts-two-all-card-box">
            <AstronautsTwoBigCards/>
            <AstronautsTwoSmallCards/>
        </div>

    </div>
}