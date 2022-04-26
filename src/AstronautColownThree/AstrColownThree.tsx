import React from 'react';
import './AstrColownThree.css'

import { ButtonLikeUpCollTwo } from '../Components/ButtonColownTwo'
import { ButtonLikeDownCollTwo } from '../Components/ButtonColownTwo'
import { FlagCollTwo } from '../Components/ButtonColownTwo'
import { DotsCollTwo } from '../Components/ButtonColownTwo'

interface IButton {
    AstronautPhotoTwo: string,
    LikeUp: string,
    LikeDown: string,
    Flag: string,
    Dots: string,
}

interface Iclasses {
    classP: string,
}

type AllProps = {
    text: string,
    Icons: IButton,
    classes: Iclasses
}

export const CardColownThree = ({text, Icons, classes}: AllProps) => {
    return <div className='generalBoxColownThree'>
        
        
        <div className='CardThreeDisplay'>
            <div>
                <p className='TxtDataColownThree'>April 20, 2021</p>
                <h1 className={classes.classP}>{text}</h1>
            </div>
            <img src={Icons.AstronautPhotoTwo}/>
        </div>

        <div className='ButtonColownThree'><div><ButtonLikeUpCollTwo img={Icons.LikeUp}/><ButtonLikeDownCollTwo img={Icons.LikeDown}/></div><div><FlagCollTwo img={Icons.Flag}/><DotsCollTwo img={Icons.Dots}/></div></div>
        <hr className='ColownThreeDownLine'/> 

    </div>
}
