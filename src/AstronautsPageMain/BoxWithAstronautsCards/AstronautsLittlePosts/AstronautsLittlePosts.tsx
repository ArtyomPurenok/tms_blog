import React from "react";
import './AstronautsLittlePosts.css';

import {Card} from '../../../components/Card';
import {LikeBox} from '../../../components/LikeBox';

type LittlePostProps = {
    dataServer: any
}

export const AstronautsLittlePosts = (({dataServer}: LittlePostProps) => {
    let LittlePosts = dataServer.map((el: any) => {
        if(el.id === 3) {
            return <div>
                <Card cardClass="card-littele-post" cardImg={el.img} cardData={el.data} cardTitle={el.h1} cardTxtClass='card-little-txt'/>
                <LikeBox/>
                <hr className="littele-post-hr"/>
                </div>
        }
    })

    return <div className="astromauts-littele-posts">
        {LittlePosts}
    </div>
});