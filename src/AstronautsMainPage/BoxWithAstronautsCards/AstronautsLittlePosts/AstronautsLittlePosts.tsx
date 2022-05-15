import React from "react";
import './AstronautsLittlePosts.scss';

import {Card} from '../../../components/Card';
import {LikeBox} from '../../../components/LikeBox';
import {LineButtom} from '../../../components/LineButtom'

type LittlePostProps = {
    dataServer: any
}

export const AstronautsLittlePosts = (({dataServer}: LittlePostProps) => {
    let LittlePosts = dataServer.map((el: any) => {
        if(el.id === 3) {
            return <div>
                <Card cardClass="card-littele-post" cardImg={el.img} cardData={el.data} cardTitle={el.h1} cardTxtClass='card-littele-post__txt'/>
                <LikeBox/>
                <LineButtom/>
                </div>
        }
    })

    return <div className="astromauts-littele-posts">
        {LittlePosts}
    </div>
});