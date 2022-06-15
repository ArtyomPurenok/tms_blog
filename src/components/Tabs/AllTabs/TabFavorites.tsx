import React from "react"
import { useSelector } from "react-redux"
import './AllTabs.scss'

import {Card} from '../../../components/Card'

export const TabFavorites = () => {
    const dataServer = useSelector((state: any) => state.data)

    const Favorite = dataServer?.arrObject.map((el: any, index: number) => {
        if (el.bookmark === true) {
            return <div key={el.id}>
            <Card cardClass="tab-favorites__card" cardImg={el.image} cardData={el.date} cardTitle={el.title} cardArticle={el.text} cardTxtClass='tab-favorites__tst'/>
        </div>
        }else {<div>{el.id}</div>}
    })

    return <div  className='tab-favorites'>
        {Favorite}
    </div>
}