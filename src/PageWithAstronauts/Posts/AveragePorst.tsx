import React from 'react';
import {LikePanel} from '../components'
import './AveragePorst.css'

type AveragePorstprops = {
    p?: string,
    h1?: string,
    img?: string,
}

export const AveragePorst = (({p, h1, img}: AveragePorstprops) => {
    return <div className='generalDivAveragePost'>
        <div className='averagePostImg'><img src={img}/></div>

        <div className='averagePostTxt'>
            <p>{p}</p>
            <h1>{h1}</h1>
        </div>
        <div className='averagePostLikePanel'><LikePanel/></div>
        <hr className='averagePostHr'/> 


    </div>
})