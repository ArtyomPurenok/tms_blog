import React from 'react';
import {LikePanel} from '../components'
import './LargePost.css'

type LargePostProps = {
    p: string,
    h1: string,
    img: string,
    article: string | undefined,
}


export const LargePost = (({p, h1, img, article}: LargePostProps) => {
    return <div className='generalDivLargePosts'>
      <div className='largePostDivTxtAndImg'>
        <div className='largePostDivTxt'>
          <p>{p}</p>
          <h1>{h1}</h1>
          <p>{article}</p>
        </div>


        <div className='largePostDivImg'><img src={img}/></div>
      </div>



      <div><LikePanel/></div>
      <hr className='largePostsHr'/> 

    </div>
})