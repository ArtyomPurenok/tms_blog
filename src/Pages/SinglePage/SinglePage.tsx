import React, { useEffect} from "react"
import './SinglePage.scss'
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import {postRequest} from '../../thunkAction/postRequest'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"



export const SinglePage = () => {
    const {id} = useParams()
    
    const post = useSelector((state: any) => state.post)
    const dispatch = useDispatch()


    useEffect(() => {    
        dispatch(postRequest(id))
    }, [id])





    return <div className="single-page">
        <Header/>

        <div className="single-page__center">
            <div className="single-page__link-home">
                <p>Home</p>
                <span>{`ID: ${id}`}</span>
            </div>


            <div className="single-page__card">
                <h1>{post?.post?.title}</h1>
                <div className="single-page__img">
                    <img src={post?.post?.image}/>
                </div>

                <p>{post?.post?.text}</p>
            </div>
        </div>

        <Footer/>
    </div>

}