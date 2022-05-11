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
                <Card CardClass="card-big-post" CardImg={el.img} CardData={el.data} CardTitle={el.h1} CardArticle={el.article} CardTxtClass='big-post-txt'/>
                <LikeBox/>
                <hr className="big-post-hr"/>
            </div>
        }

        if (el.id === 2) {
            return <div className="middle-posts">
                <Card CardClass="card-middle-posts" CardImg={el.img} CardData={el.data} CardTitle={el.h1} CardArticle={el.article} CardTxtClass='middle-posts-txt'/>
                <LikeBox/>
                <hr className="middle-post-hr"/>
            </div>
        }
    })

    
    return <div className="astronauts-center-posts">

        {CardLargeAverage}

    </div>
})