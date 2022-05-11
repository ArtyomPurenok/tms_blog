import React from "react";
import './AstronautsCenterPosts.css';

import {Card} from '../../../components/Card';
import {LikeBox} from '../../../components/LikeBox';

type CenterPostsProps = {
    dataServer?: any
};

export const AstronautsCenterPosts = (({dataServer}:CenterPostsProps) => {
    const CardLargeAverage = dataServer.map((el: any) => {
        if(el.id === 1) {
            return <div className="big-post">
                <Card cardClass="card-big-post" cardImg={el.img} cardData={el.data} cardTitle={el.h1} cardArticle={el.article} cardTxtClass='big-post-txt'/>
                <LikeBox/>
                <hr className="big-post-hr"/>
            </div>
        }

        if (el.id === 2) {
            return <div className="middle-posts">
                <Card cardClass="card-middle-posts" cardImg={el.img} cardData={el.data} cardTitle={el.h1} cardArticle={el.article} cardTxtClass='middle-posts-txt'/>
                <LikeBox/>
                <hr className="middle-post-hr"/>
            </div>
        }
    })

    
    return <div className="astronauts-center-posts">

        {CardLargeAverage}

    </div>
})