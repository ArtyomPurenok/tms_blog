import React from "react"
import './AstronautsLittlePosts.scss'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { type IResults} from '../../../redux/reducer/NewPost'

import {Card} from '../../../components/Card'
import {LikeBox} from '../../../components/LikeBox'
import {LineButtom} from '../../../components/LineButtom'



export const AstronautsLittlePosts = () => {
    const dataCards = useSelector((state: any) => state.data);  

    let LittlePosts = dataCards?.arrObject?.slice(5, 11).map((el: IResults, index: number) => {
            return <div key={el.id}>
                <a className="card-littele-post__a" key={el.id} href={`/posts/${el.id}`}>
                <Card cardClass="card-littele-post" cardImg={el.image} cardData={el.date} cardTitle={el.title} cardTxtClass='card-littele-post__txt'/>
                </a>
                <LikeBox id={el.id} bookmarkActive={el.bookmark} likeActive={el.like} dislikeActive={el.dislike}/>
                <LineButtom/>
                </div>
    })

    return <div className="astromauts-littele-posts">
        {LittlePosts}
    </div>
};