import React from "react";
import './AstronautsLittlePosts.scss';

import {Card} from '../../../../components/Card';
import {LikeBox} from '../../../../components/LikeBox';
import {LineButtom} from '../../../../components/LineButtom';
import { type Post} from '../../../../redux/reducer/NOActivePostServer';

type LittlePostProps = {
    dataServer?: any
}

export const AstronautsLittlePosts = ({dataServer}: LittlePostProps) => {
    let LittlePosts = dataServer?.slice(5, 11).map((el: any, index: number) => {
            return <div key={index}>
                <Card cardClass="card-littele-post" cardImg={el.image} cardData={el.date} cardTitle={el.title} cardTxtClass='card-littele-post__txt'/>
                <LikeBox id={el.id} bookmarkActive={el.bookmark} likeActive={el.like} dislikeActive={el.dislike}/>
                <LineButtom/>
                </div>
    })

    return <div className="astromauts-littele-posts">
        {LittlePosts}
    </div>
};