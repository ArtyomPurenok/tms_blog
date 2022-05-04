import React from 'react';
import {LikePanel} from '../components'
import './LittlePost.css'

type LittlePostProps = {
    p?: string,
    h1?: string,
    img?: string,
}

export const LittlePost = (({p, h1, img}: LittlePostProps) => {
//   const qwe = a.map((el: any) => {
//     return <div>
//     <CardTest p={el.p} div={el.div}/>
// </div>
//   })


    return  <div className='generalDivLittlePost'>
      <div className='littlePostDivTxtAndImg'>
        <div className='littlePostDivTxt'>
          <p>{p}</p>
          <h1>{h1}</h1>
        </div>


        <div className='littlePostDivImg'><img src={img}/></div>
      </div>



      <div><LikePanel/></div>
      <hr className='littlePostHr'/> 
        </div>

    
})