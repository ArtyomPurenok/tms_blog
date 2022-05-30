import React from "react";
import './AstronautsLittlePosts.scss';

import {Card} from '../../../../components/Card';
import {LikeBox} from '../../../../components/LikeBox';
import {LineButtom} from '../../../../components/LineButtom';
import { type Post} from '../../../../redux/reducer/PostServer';

type LittlePostProps = {
    dataServer?: any
}

export const AstronautsLittlePosts = ({dataServer}: LittlePostProps) => {
    let LittlePosts = dataServer.data?.results?.slice(5).map((el: any, index: number) => {
            return <div key={index}>
                <Card cardClass="card-littele-post" cardImg={el.image} cardData={el.date} cardTitle={el.title} cardTxtClass='card-littele-post__txt'/>
                <LikeBox id={el.id}/>
                <LineButtom/>
                </div>
    })

    return <div className="astromauts-littele-posts">
        {LittlePosts}
    </div>
};