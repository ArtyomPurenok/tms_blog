import React from "react"
import {AstronautsCenterPosts} from '../../../Pages/AstronautsMainPage/AstronautsCenterPosts'
import {AstronautsLittlePosts} from '../../../Pages/AstronautsMainPage/AstronautsLittlePosts'

export const TabAll = () => {
    return <div className="tab-all">
        <AstronautsCenterPosts/>
        <AstronautsLittlePosts/>
    </div>
}