import React from "react";
import './AstronautsCenterPosts.scss';

import {Card} from '../../../../components/Card';
import {LikeBox} from '../../../../components/LikeBox';
import {LineButtom} from '../../../../components/LineButtom';

type CenterPostsProps = {
    dataServer?: any
};

export const AstronautsCenterPosts = ({dataServer}:CenterPostsProps) => {
    const CardLargeAverage = dataServer.map((el: any, index: number) => {
        if(index === 0) {
            return <div key={index}>
                <Card cardClass="card-big-post" cardImg={el.img} cardData={el.data} cardTitle={el.h1} cardArticle={el.article} cardTxtClass='card-big-post__txt'/>
                <LikeBox id={el.id}/>
                <LineButtom/>
            </div>
        }

        if (index === 1 || index ===  2 || index ===  3 || index ===  4) {
            return <div key={index}>
                <Card cardClass="card-middle-post" cardImg={el.img} cardData={el.data} cardTitle={el.h1} cardArticle={el.article} cardTxtClass='card-middle-post__txt'/>
                <LikeBox id={el.id}/>
                <LineButtom/>
            </div>
        }
    })

    return <div className="astronauts-center-posts">

        {CardLargeAverage}

    </div>
}