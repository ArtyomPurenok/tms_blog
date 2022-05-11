import React from "react";
import './AstronautsLittlePosts.css';

import {Card} from '../../components/Card';
import {LikeBox} from '../../components/LikeBox';

type LittlePostProps = {
    dataTwoServer: any
}

export const AstronautsLittlePosts = (({dataTwoServer}: LittlePostProps) => {
    let LittlePosts = dataTwoServer.map((el: any) => {
        if(el.id === 3) {
            return <div>
                <Card CardClass="card-littele-post" CardImg={el.img} CardData={el.data} CardTitle={el.h1} CardTxtClass='card-little-txt'/>
                <LikeBox/>
                <hr className="littele-post-hr"/>
                </div>
        }
    })

    return <div className="astromauts-littele-posts">
        {LittlePosts}
    </div>
});