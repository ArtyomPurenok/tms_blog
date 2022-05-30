import React, { useEffect } from "react";
import './AstronautsCenterPosts.scss';

import {Card} from '../../../../components/Card';
import {LikeBox} from '../../../../components/LikeBox';
import {LineButtom} from '../../../../components/LineButtom';
import { type Post} from '../../../../redux/reducer/PostServer';
import { useSelector } from "react-redux";

type CenterPostsProps = {
    dataServer?: any
};



export const AstronautsCenterPosts = ({dataServer}:CenterPostsProps) => {
    const dataCards = useSelector((state: any) => state.data);

    console.log(dataServer.data)
    const CardLargeAverage = dataServer.data?.results?.map((el: any, index: number) => {
        if(index === 0) {
            return <div key={el.id}>
                <Card cardClass="card-big-post" cardImg={el.image} cardData={el.date} cardTitle={el.title} cardArticle={el.text} cardTxtClass='card-big-post__txt'/>
                <LikeBox id={el.id} bookmarkStyle={el.Bookmark}/>
                <LineButtom/>
            </div>
        }

        if (index === 1 || index ===  2 || index ===  3 || index ===  4) {
            return <div key={index}>
                <Card cardClass="card-middle-post" cardImg={el.image} cardData={el.date} cardTitle={el.title} cardArticle={el.text} cardTxtClass='card-middle-post__txt'/>
                <LikeBox id={el.id} bookmarkStyle={el.Bookmark}/>
                <LineButtom/>
            </div>
        }
    })

    return <div className="astronauts-center-posts">

        {CardLargeAverage}

    </div>
}