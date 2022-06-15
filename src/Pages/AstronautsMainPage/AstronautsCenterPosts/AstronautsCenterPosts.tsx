import React, { useEffect } from "react"
import './AstronautsCenterPosts.scss'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { type IResults} from '../../../redux/reducer/NewPost'

import {Card} from '../../../components/Card'
import {LikeBox} from '../../../components/LikeBox'
import {LineButtom} from '../../../components/LineButtom'



export const AstronautsCenterPosts = () => {
    const dataCards = useSelector((state: any) => state.data);  

    const CardLargeAverage = dataCards?.arrObject?.map((el: IResults, index: number) => {
        if(index === 0) {
            return <div key={el.id}>
                <a className="card-post-link" key={el.id} href={`/posts/${el.id}`}>
                <Card cardClass="card-big-post" cardImg={el.image} cardData={el.date} cardTitle={el.title} cardArticle={el.text} cardTxtClass='card-big-post__txt'/>
                </a>
                <LikeBox id={el.id} bookmarkActive={el.bookmark} likeActive={el.like} dislikeActive={el.dislike}/>
                <LineButtom/>
            </div>
        }

        if (index > 0 && index < 5) {
            return <div key={el.id}>
                <a className="card-post-link" key={el.id} href={`/posts/${el.id}`}>
                <Card cardClass="card-middle-post" cardImg={el.image} cardData={el.date} cardTitle={el.title} cardArticle={el.text} cardTxtClass='card-middle-post__txt'/>
                </a>
                <LikeBox id={el.id} bookmarkActive={el.bookmark} likeActive={el.like} dislikeActive={el.dislike}/>
                <LineButtom/>
            </div>
        }
    })

    return <div className="astronauts-center-posts">

        {CardLargeAverage}

    </div>
}