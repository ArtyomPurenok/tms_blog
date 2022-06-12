import React, {useEffect} from "react"
import './AstronautsMainPage.scss'
import { useDispatch, useSelector } from "react-redux"

import {featchData} from '../../thunkAction/AddPost'

import {PageTittle} from '../../components/PageTittle'
import {Tabs} from '../../components/Tabs'




export const AstronautsMainPage = () => {
    const dataCards = useSelector((state: any) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if(dataCards.data === null) {
            dispatch(featchData())
        }
    }, [])


    return <div className="astronauts-main-page">

    <div className="astronauts-main-page__center-div     box-with-astronauts-cards-general-div">
        <PageTittle pageTitleTxt='Blog' pageTitleGeneralDiv='astronauts-main-page__tittle'/>
        <Tabs/>
    </div>
    
    </div>
}