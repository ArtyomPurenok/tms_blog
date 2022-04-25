import { useState } from 'react'
import React from 'react';
import '../Astronauts/AstronautsCSS/AstronautsCardFive.css'
import { ButtonLikeUp } from '../Components/Button'
import { ButtonLikeDown } from '../Components/Button'
import { Flag } from '../Components/Button'
import { Dots } from '../Components/Button'

interface IImages {
    AstronautPhotoOne: string,
    LikeUp: string,
    LikeDown: string,
    Flag: string,
    Dots: string,
}

interface IClassesCardFive {
    textOne: string,
    textTwo: string,
    image: string,
}

type el = {
    classesCardFive: IClassesCardFive
    img: IImages
}

export const AstronautСardFive = ({classesCardFive, img}: el) => {



    return <div>

    <div className='generalCardFive'>
    <div className='CardFive'>

    <div className='TextBoxCardFive'>
      <p className={classesCardFive.textOne}>April 20, 2021</p>
      <h3 className={classesCardFive.textTwo}>Astronauts prepare for new solar arrays</h3>
      <p className={classesCardFive.textOne}>Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday.</p>
    </div>

    <div><img className={classesCardFive.image} src={img.AstronautPhotoOne}/></div>

    </div>
    <div className='ButtonsCardFive'><div><ButtonLikeUp img={img.LikeUp}/><ButtonLikeDown img={img.LikeDown}/></div><div><Flag img={img.Flag}/><Dots img={img.Dots}/></div></div>
    <hr className='CardFiveline'/> 
    </div>






    </div>}