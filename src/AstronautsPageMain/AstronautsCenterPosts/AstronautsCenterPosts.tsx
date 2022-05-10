import React from "react";
import './AstronautsCenterPosts.css'

import {Card} from '../../components/Card'
import {LikeBox} from '../../components/LikeBox'

type AstrsCenterPostsProps = {
    DataServer?: any
}

export const AstronautsCenterPosts = (({DataServer}:AstrsCenterPostsProps) => {
    const CardLargeAverage = DataServer.map((el: any) => {
        if(el.id === 1) {
            return <div className="bigPost">
                <Card CardClass="cardBigPost" CardImg={el.img} CardData={el.data} CardTitle={el.h1} CardArticle={el.article} CardTxtClass='bigPostTxt'/>
                <LikeBox/>
                <hr className="bigPostHr"/>
            </div>
        }

        if (el.id === 2) {
            return <div className="middlePosts">
                <Card CardClass="cardmiddlePosts" CardImg={el.img} CardData={el.data} CardTitle={el.h1} CardArticle={el.article} CardTxtClass='middlePostsTxt'/>
                <LikeBox/>
                <hr className="middlePostHr"/>
            </div>
        }
    })

    
    return <div className="astronautsCenterPosts">

        {CardLargeAverage}

    </div>
})