import React from 'react';
import './AstrThreeColownTwo.css'

import { ButtonLikeUpCollTwo } from '../Components/ButtonColownTwo'
import { ButtonLikeDownCollTwo } from '../Components/ButtonColownTwo'
import { FlagCollTwo } from '../Components/ButtonColownTwo'
import { DotsCollTwo } from '../Components/ButtonColownTwo'


interface IImages {
    AstronautPhotoTwo: string,
    LikeUp: string,
    LikeDown: string,
    Flag: string,
    Dots: string,
}

type elements = {
    img: IImages
}

export const AstrThreeColownTwo = ({img}: elements) => {
    return <div>

        <div className='generalThreeColownTwo'>

        <img className='AstronautImageSecond' src={img.AstronautPhotoTwo}/>
        <div>
            <p className='CardThreeColTwoTxt1'>April 20, 2021</p>
            <h1 className='CardThreeColTwoTxt2'>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
        </div>

        <div className='ButtonColownTwo'><div><ButtonLikeUpCollTwo img={img.LikeUp}/><ButtonLikeDownCollTwo img={img.LikeDown}/></div><div><FlagCollTwo img={img.Flag}/><DotsCollTwo img={img.Dots}/></div></div>
        <hr className='CardThreeColTwoline'/> 
        </div>




    </div>
}